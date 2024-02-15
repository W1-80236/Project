package com.sunbeam.carnivalrestaurant.api;

import com.google.gson.JsonObject;
import com.sunbeam.carnivalrestaurant.entity.Customer;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.DELETE;
import retrofit2.http.GET;
import retrofit2.http.POST;
import retrofit2.http.PUT;
import retrofit2.http.Path;

public interface API {
    public static final String BASE_URL="http://192.168.16.248:9898";

    @GET("/food_tb")
    public Call<JsonObject> getAllFoodId();

    @GET("/customer_tb")
    public Call<JsonObject> getAllCustomers();

    @POST("/customer_tb/register")
    public Call<JsonObject> registerCustomer(@Body Customer customer);


    @POST("/customer_tb/login")
    public Call<JsonObject> loginCustomer(@Body Customer customer);


    @PUT("/customer_tb/resetpass/{mobile_no}")
   //    public Call<JsonObject> editPassword( @Body Customer customer);
    public Call<JsonObject> editPassword(@Path("mobile_no") String mobile_no, @Body Customer customer);

    @DELETE("/customer/{customer_id}")
    public Call<JsonObject> deleteCustomer(@Path("customer_id") int customer_id);
}
