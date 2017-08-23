---
layout: post
date: 2017-08-23 04:29:21
title: Concatenate two C++ maps of vectors
categories: [codes]
tags: [programming, cpp]
---

To concatenate two C++ `std::vector`s, it is as simple as:

```cpp
vec2.insert(vec2.end(), vec1.begin(), vec1.end());
```

Likewise, to concatenate two `std::map`s:

```cpp
map2.insert(map1.begin(), map1.end());
```

Note that when a key is present in both maps, the old value is overwritten by the new value. What if you have two maps of vectors, and when the same key exists in both maps, you want to keep all the values? The following is my implementation:

```cpp
// Check type for map of vector
template<typename>
struct is_map_of_vectors : public std::false_type { };

template<typename T1, typename T2>
struct is_map_of_vectors<std::map<T1, std::vector<T2> > > : public std::true_type { };

// Merge a map of vectors (map1) into another map of vectors (map2)
template<typename Map>
void concatenate_maps_of_vectors(Map& map1, Map& map2) {
  typedef typename Map::iterator Iterator;
  typedef typename Map::mapped_type Container;

  Iterator first = map1.begin();
  Iterator last = map1.end();

  for (; first != last; ++first) {
    std::pair<Iterator, bool> ins = map2.insert(*first);
    if (!ins.second) {  // if insertion into map2 was not successful
      if (is_map_of_vectors<Map>::value) {  // special case for map of vectors
        Container* vec1 = &(first->second);
        Container* vec2 = &(ins.first->second);
        vec2->insert(vec2->end(), vec1->begin(), vec1->end());
      } else {
        // do nothing
      }
    }
  }
}
```

