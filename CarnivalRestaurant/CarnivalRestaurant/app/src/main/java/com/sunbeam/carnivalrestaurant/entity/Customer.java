package com.sunbeam.carnivalrestaurant.entity;

import java.io.Serializable;

public class Customer implements Serializable {
   private int customer_id;
   private String cust_first_name;
    private String cust_last_name;
    private String email;
    private String mobile_no;
    private String password;

    public Customer() {
    }

    public Customer(int customer_id, String cust_first_name, String cust_last_name, String email, String mobile_no, String password) {
        this.customer_id = customer_id;
        this.cust_first_name = cust_first_name;
        this.cust_last_name = cust_last_name;
        this.email = email;
        this.mobile_no = mobile_no;
        this.password = password;
    }


    public int getCustomer_id() {
        return customer_id;
    }

    public void setCustomer_id(int customer_id) {
        this.customer_id = customer_id;
    }

    public String getCust_first_name() {
        return cust_first_name;
    }

    public void setCust_first_name(String cust_first_name) {
        this.cust_first_name = cust_first_name;
    }

    public String getCust_last_name() {
        return cust_last_name;
    }

    public void setCust_last_name(String cust_last_name) {
        this.cust_last_name = cust_last_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobile_no() {
        return mobile_no;
    }

    public void setMobile_no(String mobile_no) {
        this.mobile_no = mobile_no;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "customer_id=" + customer_id +
                ", cust_first_name='" + cust_first_name + '\'' +
                ", cust_last_name='" + cust_last_name + '\'' +
                ", email='" + email + '\'' +
                ", mobile_no=" + mobile_no +
                ", password='" + password + '\'' +
                '}';
    }
}
