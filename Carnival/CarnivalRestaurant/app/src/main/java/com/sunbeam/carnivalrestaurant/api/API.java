package com.sunbeam.carnivalrestaurant.api;

import com.google.gson.JsonObject;
import com.sunbeam.carnivalrestaurant.entity.Customer;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.POST;

public interface API {
    public static final String BASE_URL="http://192.168.0.137:9898";

    @GET("/customer_tb")
    public Call<JsonObject> getAllCustomers();

    @POST("/customer_tb")
    Call<JsonObject> loginCustomer(Customer customer);

    @POST("/customer_tb")
    Call<JsonObject> registerCustomer(Customer customer);
}
