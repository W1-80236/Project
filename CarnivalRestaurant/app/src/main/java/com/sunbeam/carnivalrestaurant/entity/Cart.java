package com.sunbeam.carnivalrestaurant.entity;

import java.io.Serializable;

public class Cart implements Serializable {
   private int co_id;
    private int customer_id;
    private int food_id;
    private int quantity;
    private int price;
    private int total;

    public Cart() {
    }

    public Cart(int co_id, int customer_id, int food_id, int quantity, int price, int total) {
        this.co_id = co_id;
        this.customer_id = customer_id;
        this.food_id = food_id;
        this.quantity = quantity;
        this.price = price;
        this.total = total;
    }

    public int getCo_id() {
        return co_id;
    }

    public void setCo_id(int co_id) {
        this.co_id = co_id;
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

    public void setQuantity(int newQuantity) {
        this.quantity = quantity;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
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
                "co_id=" + co_id +
                ", customer_id=" + customer_id +
                ", food_id=" + food_id +
                ", quantity=" + quantity +
                ", price=" + price +
                ", total=" + total +
                '}';
    }


}