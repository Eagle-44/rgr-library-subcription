package com.androsiuk.lab_patterns.mapper;

public interface Mapper <Entity, DTO>{
    DTO map(Entity entity);
}
