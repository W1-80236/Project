package com.sunbeam.carnivalrestaurant.entity;

import java.io.Serializable;

public class Cart implements Serializable {
    private int customer_id;
    private int food_id;
    private int quantity;
    private int food_price;
    private int total;
    public Cart()
    {}
    public Cart(int customer_id, int food_id, int quantity, int food_price, int total) {
        this.customer_id = customer_id;
        this.food_id = food_id;
        this.quantity = quantity;
        this.food_price = food_price;
        this.total = total;
    }

    public int getCustomer_id() {
        return customer_id;
    }

    public void setCustomer_id(int customer_id) {
        this.customer_id = customer_id;
    }

    public int getFood_id() {
        return food_id;
    }

    public void setFood_id(int food_id) {
        this.food_id = food_id;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getFood_price() {
        return food_price;
    }

    public void setFood_price(int food_price) {
        this.food_price = food_price;
    }

    public int getTotal() {
        return total;
    }

    public void setTotal(int total) {
        this.total = total;
    }

    @Override
    public String toString() {
        return "Cart{" +
                "customer_id=" + customer_id +
                ", food_id=" + food_id +
                ", quantity=" + quantity +
                ", food_price=" + food_price +
                ", total=" + total +
                '}';
    }
}