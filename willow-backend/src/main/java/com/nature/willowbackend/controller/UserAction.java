/*
 * Copyright (C) 2018 iQIYI.COM - All Rights Reserved.
 * This file is part of Pizza project. Unauthorized copy
 * of this file, via any medium is strictly prohibited.
 * Proprietary and Confidential.
 *
 * Author(s): INQ Team <iig_ipd_inq@qiyi.com>
 */
package com.nature.willowbackend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class UserAction {
    
    @GetMapping("user")
    public List<Map<String, Object>> getUserInfo() {
        Map<String, Object> map = new HashMap<>();
        map.put("name", "wanglei");
        map.put("age", 18);
        List<Map<String, Object>> list = new ArrayList<>();
        Map<String, Object> map1 = new HashMap<>();
        map1.put("name", "xiaoming");
        map1.put("age", 28);
        list.add(map);
        list.add(map1);
        return list;
    }
}
