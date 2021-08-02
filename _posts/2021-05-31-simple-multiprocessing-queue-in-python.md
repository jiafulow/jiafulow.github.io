---
layout: post
date: 2021-05-31 23:04:11
title: "Simple multiprocessing queue in Python"
categories: [codes]
tags: [python, multiprocessing, programming]
---

This is a very simple version of how to work with [multiprocessing](https://docs.python.org/3/library/multiprocessing.html) queue that I wrote while learning. There are two multiprocessing [Queues](https://docs.python.org/3/library/multiprocessing.html#multiprocessing.Queue) `task_queue` and `done_queue` that are used to submit and receive the tasks.
Typically we should tell the [Processes](https://docs.python.org/3/library/multiprocessing.html#multiprocessing.Process) to `start()` and `join()`. But I use sentinels to mark the end of `task_queue` so I do not have to call `join()`. For the `done_queue`, I use the fact that I know the exact number of items to `get()`.
Usually, if we know the exact num of items, it's better to use a multiprocessing [Pool](https://docs.python.org/3/library/multiprocessing.html#multiprocessing.pool.Pool). But I use queues since I'm interested to implement the worker as an iterator (which does not assume the num of items).

``` python
import multiprocessing

class Sequence(object):
    """
    A simple sequence that iterates over files obtained from a queue.
    """
    SENTINEL = None

    def __init__(self, files):
        self._files = files

    def __iter__(self):
        while True:
            filename = self._next_file()
            if filename is None:
                break
            yield filename

    def _next_file(self):
        filename = self._files.get()
        if filename == self.SENTINEL:
            return None
        return filename

def worker(task_queue, done_queue):
    seq = Sequence(task_queue)
    for x in seq:
        done_queue.put(x)

# Main
if __name__ == '__main__':
    num_workers = 4
    num_entries = 1000

    task_queue = multiprocessing.Queue()
    done_queue = multiprocessing.Queue()

    for _ in range(num_workers):
        multiprocessing.Process(
            target=worker, args=(task_queue, done_queue)).start()

    # task_queue is supposed to take filenames, but for the purposes
    # of this exercise, it is easier to do integers
    for i in range(num_entries):
        task_queue.put(i)

    for _ in range(num_workers):
        task_queue.put(Sequence.SENTINEL)

    result = []
    for _ in range(num_entries):
        result.append(done_queue.get())

    print('Done: {0}/{1} entries'.format(len(result), num_entries))

    # Sanity check
    assert sum(result) == sum(range(num_entries))
```
