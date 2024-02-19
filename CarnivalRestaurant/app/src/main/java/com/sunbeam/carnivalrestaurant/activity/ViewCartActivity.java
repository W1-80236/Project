package com.sunbeam.carnivalrestaurant.activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.TextView;
import android.widget.Toast;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.sunbeam.carnivalrestaurant.R;
import com.sunbeam.carnivalrestaurant.adapter.CartAdapter;
import com.sunbeam.carnivalrestaurant.api.RetrofitClient;
import com.sunbeam.carnivalrestaurant.entity.Food;
import com.sunbeam.carnivalrestaurant.utility.CarnivalConstants;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class ViewCartActivity extends AppCompatActivity {
    Toolbar toolbar;
    RecyclerView recyclerView;
    List<Food> cartList;

    CartAdapter cartAdapter;
    Food food;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_view_cart);
        toolbar = findViewById(R.id.toolBar);
        setSupportActionBar(toolbar);
        recyclerView = findViewById(R.id.recyclerView);
        cartList = new ArrayList<>();

        cartAdapter= new CartAdapter(cartList,this);
        recyclerView.setAdapter(cartAdapter);
        recyclerView.setLayoutManager(new GridLayoutManager(this,1));

        getCart();
    }

    public void getCart()
    {
        int customer_id = getSharedPreferences(CarnivalConstants.SHARED_PREFERENCE_FILE_NAME,MODE_PRIVATE)
                .getInt(CarnivalConstants.CUSTOMER_ID,0);


        RetrofitClient.getInstance().getApi().getCart(customer_id).enqueue(new Callback<JsonObject>() {
            @Override
            public void onResponse(Call<JsonObject> call, Response<JsonObject> response) {
                if (response.isSuccessful() && response.body() != null && response.body().has("status")) {
                    Log.e("onResponse", "" + response.body());
                    if (response.body().get("status").getAsString().equals("success")) {
                        JsonArray array = response.body().get("data").getAsJsonArray();
                        Log.e("v", array.toString());
                        cartList.clear();
                        for (JsonElement element : array) {
                            JsonObject object = element.getAsJsonObject();
                            Food food = new Food();
                            food.setFood_id(object.get("id").getAsInt());
                            food.setFood_name(object.get("name").getAsString());
                            food.setImage(object.get("image").getAsString());
                            food.setFood_price(object.get("price").getAsInt());
                       //     food.setQuantity(object.get("qty").getAsInt());
                            cartList.add(food);
                        }
                        cartAdapter.notifyDataSetChanged();
                    } else {
                        Log.e("onResponse", "Unsuccessful response or status not success");
                    }
                } else {
                    Log.e("onResponse", "Response is null or unsuccessful");
                }
            }


            @Override
            public void onFailure(Call<JsonObject> call, Throwable t) {
                Log.e("onFailure","onFailure");
                Toast.makeText(ViewCartActivity.this, "Something went wrong", Toast.LENGTH_SHORT).show();
            }
        });



    }
}

