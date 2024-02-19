package com.sunbeam.carnivalrestaurant.entity;

import java.io.Serializable;
import java.util.Date;

public class Bill implements Serializable {
    private int bill_id;
    private int customer_id;
    private int dinning_id;
    private int total_bill;
    private int bill_status;
    private Date bill_datetime;

    public Bill() {
    }

    public Bill(int bill_id, int customer_id, int dinning_id, int total_bill, int bill_status, Date bill_datetime) {
        this.bill_id = bill_id;
        this.customer_id = customer_id;
        this.dinning_id = dinning_id;
        this.total_bill = total_bill;
        this.bill_status = bill_status;
        this.bill_datetime = bill_datetime;
    }

    public int getBill_id() {
        return bill_id;
    }

    public void setBill_id(int bill_id) {
        this.bill_id = bill_id;
    }

    public int getCustomer_id() {
        return customer_id;
    }

    public void setCustomer_id(int customer_id) {
        this.customer_id = customer_id;
    }

    public int getDinning_id() {
        return dinning_id;
    }

    public void setDinning_id(int dinning_id) {
        this.dinning_id = dinning_id;
    }

    public int getTotal_bill() {
        return total_bill;
    }

    public void setTotal_bill(int total_bill) {
        this.total_bill = total_bill;
    }

    public int getBill_status() {
        return bill_status;
    }

    public void setBill_status(int bill_status) {
        this.bill_status = bill_status;
    }

    public Date getBill_datetime() {
        return bill_datetime;
    }

    public void setBill_datetime(Date bill_datetime) {
        this.bill_datetime = bill_datetime;
    }

    @Override
    public String toString() {
        return "Bill{" +
                "bill_id=" + bill_id +
                ", customer_id=" + customer_id +
                ", dinning_id=" + dinning_id +
                ", total_bill=" + total_bill +
                ", bill_status=" + bill_status +
                ", bill_datetime=" + bill_datetime +
                '}';
    }
}
