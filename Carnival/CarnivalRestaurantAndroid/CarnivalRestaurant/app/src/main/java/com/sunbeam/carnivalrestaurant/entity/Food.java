package com.sunbeam.carnivalrestaurant.entity;

import java.io.Serializable;

public class Food implements Serializable {

    private int food_id;
    private String food_name;
    private int food_price;
    private String food_type;
    private String image;
    private int quantity;

    public Food() {
    }

    public Food(int food_id, String food_name, int food_price, String food_type, String image, int quantity) {
        this.food_id = food_id;
        this.food_name = food_name;
        this.food_price = food_price;
        this.food_type = food_type;
        this.image = image;
        this.quantity = quantity;
    }



    public int getFood_id() {
        return food_id;
    }

    public void setFood_id(int food_id) {
        this.food_id = food_id;
    }

    public String getFood_name() {
        return food_name;
    }

    public void setFood_name(String food_name) {
        this.food_name = food_name;
    }

    public int getFood_price() {
        return food_price;
    }

    public void setFood_price(int food_price) {
        this.food_price = food_price;
    }

    public String getFood_type() {
        return food_type;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public void setFood_type(String food_type) {
        this.food_type = food_type;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    @Override
    public String toString() {
        return "Food{" +
                "food_id=" + food_id +
                ", food_name='" + food_name + '\'' +
                ", food_price=" + food_price +
                ", food_type='" + food_type + '\'' +
                ", image='" + image + '\'' +
                ", quantity=" + quantity +
                '}';
    }
}
