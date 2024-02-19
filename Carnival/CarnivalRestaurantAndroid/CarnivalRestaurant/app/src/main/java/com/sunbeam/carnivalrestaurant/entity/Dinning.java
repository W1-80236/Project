package com.sunbeam.carnivalrestaurant.entity;

import java.io.Serializable;

public class Dinning implements Serializable {
    private int dinning_id;
    private String dinning_name;
    private int id;

    public Dinning() {
    }

    public Dinning(int dinning_id, String dinning_name, int id) {
        this.dinning_id = dinning_id;
        this.dinning_name = dinning_name;
        this.id = id;
    }

    public int getDinning_id() {
        return dinning_id;
    }

    public void setDinning_id(int dinning_id) {
        this.dinning_id = dinning_id;
    }

    public String getDinning_name() {
        return dinning_name;
    }

    public void setDinning_name(String dinning_name) {
        this.dinning_name = dinning_name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "Dinning{" +
                "dinning_id=" + dinning_id +
                ", dinning_name='" + dinning_name + '\'' +
                ", id=" + id +
                '}';
    }
}
