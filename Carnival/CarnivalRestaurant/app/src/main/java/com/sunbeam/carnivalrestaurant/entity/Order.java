package com.sunbeam.carnivalrestaurant.entity;

import java.io.Serializable;
import java.util.Date;

public class Order implements Serializable {
    private int order_tb;
    private int customer_id;
    private int food_id;
    private int dinning_id;
    private int quantity;
    private int food_total;
    private Date order_datetime;

    public Order() {
    }

    public Order(int order_tb, int customer_id, int food_id, int dinning_id, int quantity, int food_total, Date order_datetime) {
        this.order_tb = order_tb;
        this.customer_id = customer_id;
        this.food_id = food_id;
        this.dinning_id = dinning_id;
        this.quantity = quantity;
        this.food_total = food_total;
        this.order_datetime = order_datetime;
    }

    public int getOrder_tb() {
        return order_tb;
    }

    public void setOrder_tb(int order_tb) {
        this.order_tb = order_tb;
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

    public int getDinning_id() {
        return dinning_id;
    }

    public void setDinning_id(int dinning_id) {
        this.dinning_id = dinning_id;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getFood_total() {
        return food_total;
    }

    public void setFood_total(int food_total) {
        this.food_total = food_total;
    }

    public Date getOrder_datetime() {
        return order_datetime;
    }

    public void setOrder_datetime(Date order_datetime) {
        this.order_datetime = order_datetime;
    }

    @Override
    public String toString() {
        return "Order{" +
                "order_tb=" + order_tb +
                ", customer_id=" + customer_id +
                ", food_id=" + food_id +
                ", dinning_id=" + dinning_id +
                ", quantity=" + quantity +
                ", food_total=" + food_total +
                ", order_datetime=" + order_datetime +
                '}';
    }
}
