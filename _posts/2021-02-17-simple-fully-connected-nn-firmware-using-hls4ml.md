---
layout: post
date: 2021-02-17 21:48:51
title: "Simple fully-connected NN firmware using hls4ml"
categories: [howto]
tags: [python, hls4ml, machine learning, neural network, hls, firmware]
---

[hls4ml](https://fastmachinelearning.org/hls4ml/index.html) ([GitHub repo](https://github.com/fastmachinelearning/hls4ml)) is a toolkit that implements fast neural network inferences in FPGAs using High-Level Synthesis (HLS) from Vivado. It can be used to convert NN models from popular ML libraries (e.g. Keras) into VHDL or Verilog code, which can be used to generate the firmware.

The following is an example to convert a simple, 3-hidden-layer fully-connected NN, built with Keras, into HLS firmware using hls4ml. It is done inside a [conda](https://docs.anaconda.com/anaconda/install/) environment.

First, create a new environment (`tf`) and install tensorflow and hls4ml:

``` bash
conda create -n tf python=3.6
conda activate tf
pip install -U pip
pip install -U tensorflow>=2.4.0
pip install -U git+https://github.com/fastmachinelearning/hls4ml.git@v0.4.0
```

Create the Keras model. It consists of 3 fully-connected hidden layers with batch normalization and tanh activation. The output is a linear regression node. Save the model as JSON string, and store its weights in a HDF5 file.

``` python
import tensorflow as tf

def create_model(input_shape=(40,)):
  # Create a 3-hidden-layer fully-connected NN
  model = tf.keras.Sequential()
  model.add(tf.keras.layers.InputLayer(input_shape=input_shape))
  model.add(tf.keras.layers.Dense(30, kernel_initializer='glorot_uniform', use_bias=False, activation=None, name='dense'))
  model.add(tf.keras.layers.BatchNormalization(momentum=0.99, epsilon=1e-4, name='batch_normalization'))
  model.add(tf.keras.layers.Activation('tanh', name='activation'))
  model.add(tf.keras.layers.Dense(20, kernel_initializer='glorot_uniform', use_bias=False, activation=None, name='dense_1'))
  model.add(tf.keras.layers.BatchNormalization(momentum=0.99, epsilon=1e-4, name='batch_normalization_1'))
  model.add(tf.keras.layers.Activation('tanh', name='activation_1'))
  model.add(tf.keras.layers.Dense(10, kernel_initializer='glorot_uniform', use_bias=False, activation=None, name='dense_2'))
  model.add(tf.keras.layers.BatchNormalization(momentum=0.99, epsilon=1e-4, name='batch_normalization_2'))
  model.add(tf.keras.layers.Activation('tanh', name='activation_2'))
  model.add(tf.keras.layers.Dense(1, kernel_initializer='glorot_uniform', use_bias=False, activation=None, name='dense_3'))
  model.compile(loss='mse', optimizer='adam')
  model.summary()
  return model

def save_model(model, name=None):
  # Save as model.h5, model_weights.h5, and model.json
  if name is None:
    name = model.name
  model.save(name + '.h5')
  model.save_weights(name + '_weights.h5')
  with open(name + '.json', 'w') as outfile:
    outfile.write(model.to_json())
  return

if __name__ == '__main__':
  model = create_model()
  save_model(model, name='model')
```

Prepare a YAML config file (`keras-config.yml`). Specify the Xilinx FPGA part number and clock period. Make sure the filenames are correct. The documentation can be found [here](https://fastmachinelearning.org/hls4ml/api/configuration.html).

``` yaml
KerasJson: model.json
KerasH5: model_weights.h5
OutputDir: my-hls-test
ProjectName: myproject
XilinxPart: xc7vx690tffg1927-2
ClockPeriod: 5ns

IOType: io_parallel # options: io_serial/io_parallel
HLSConfig:
  Model:
    Precision: ap_fixed<16,6>
    ReuseFactor: 1
    Strategy: Latency  # options: Latency/Resource
```

Now, feed the config file to hls4ml. It is going to generate the project directory `my-hls-test` and write the firmware for you.

``` bash
hls4ml convert -c keras-config.yml
hls4ml build -p my-hls-test -a  # this might take a while

# Alternatively, the last step can be done in the following way.
# The command-line options are shown at the top of build_prj.tcl.
#cd my-hls-test
#vivado_hls -f build_prj.tcl "reset=1 csim=1 synth=1 cosim=0 validation=0"
```

The report file can be found at `my-hls-test/myproject_prj/solution1/syn/report/myproject_csynth.rpt` (as I specified `OutputDir: my-hls-test` and `ProjectName: myproject`). The Verilog codes are found at `my-hls-test/myproject_prj/solution1/syn/verilog/`. Have fun!
