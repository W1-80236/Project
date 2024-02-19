package com.sunbeam.carnivalrestaurant.api;

import com.google.gson.JsonObject;
import com.sunbeam.carnivalrestaurant.entity.Cart;
import com.sunbeam.carnivalrestaurant.entity.Customer;
import com.sunbeam.carnivalrestaurant.entity.Food;
import com.sunbeam.carnivalrestaurant.entity.Order;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.DELETE;
import retrofit2.http.GET;
import retrofit2.http.POST;
import retrofit2.http.PUT;
import retrofit2.http.Path;

public interface API {
    public static final String BASE_URL = "http:192.168.2.26:9898";

    @GET("/customer_tb")
    public Call<JsonObject>getAllCustomers();

    @POST("/customer_tb/login")
    public Call<JsonObject>loginCustomer(@Body Customer customer);

    @POST("/customer_tb/register")
    public Call<JsonObject>registerCustomer(@Body Customer customer);

    @PUT("/customer_tb/resetpassword/{email}")
//    public Call<JsonObject>editPassword( @Body Customer customer);
    public Call<JsonObject> editPassword(@Path("email") String email, @Body Customer customer);

    @DELETE("/customer/{customer_id}")
    public Call<JsonObject>deleteCustomer(@Path("customer_id") int customer_id);

//    @POST("/order_tb")
//    public Call<JsonObject> foodOrder(@Body Order order);
//
    @GET("/food_tb/fooddetails")
    public Call<JsonObject>getAllFood();

    @GET("/cart/getCart/{customer_id}")
    public Call<JsonObject>getCart(@Path("customer_id") int customer_id);

    @POST("/cart/addCart")
    public Call<JsonObject>addCart(@Body Cart cart);

}