package com.sunbeam.carnivalrestaurant.activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;
import android.util.Log;
import android.widget.Toast;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.sunbeam.carnivalrestaurant.R;
import com.sunbeam.carnivalrestaurant.adapter.MenuAdapter;
import com.sunbeam.carnivalrestaurant.api.API;
import com.sunbeam.carnivalrestaurant.api.RetrofitClient;
import com.sunbeam.carnivalrestaurant.entity.Food;
import com.sunbeam.carnivalrestaurant.utility.CarnivalConstants;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class MenuActivity extends AppCompatActivity {


    MenuAdapter menuAdapter;
    RecyclerView recyclerView;
    Toolbar toolBar;
    List<Food> menuList;
    Food food;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_menu);
        toolBar = findViewById(R.id.toolBar);

        setSupportActionBar(toolBar);
        getSupportActionBar().setTitle("              Carnival Restaurant");

        recyclerView = findViewById(R.id.recyclerView);

        int customer_id = getSharedPreferences(CarnivalConstants.SHARED_PREFERENCE_FILE_NAME,MODE_PRIVATE)
                .getInt(CarnivalConstants.CUSTOMER_ID,0);
        Log.e("MenuList" , ""+customer_id);

        menuList = new ArrayList<>();
      // vegList.add(new Food(1, "idli-sambar",30,"veg","idli.jpg",0));
        menuAdapter = new MenuAdapter(this, menuList,customer_id);
        recyclerView.setAdapter(menuAdapter);
        recyclerView.setLayoutManager(new GridLayoutManager(this, 1));
        Log.e("MenuActivity" , "inside  MenuActivity");
        getFood();
    }
      @Override
    protected void onStart() {
        super.onStart();
    }

    private void getFood() {
        Log.e("onResponse", API.BASE_URL+"food_tb/fooddetails");

       RetrofitClient.getInstance().getApi().getAllFood().enqueue(new Callback<JsonObject>() {

           @Override
           public void onResponse(Call<JsonObject> call, Response<JsonObject> response) {

               Log.e("onResponse", "" + response.body());

               // Check if the response is successful and the body is not null
               if (response.isSuccessful() && response.body() != null) {
                   JsonObject responseBody = response.body();

                   // Check if the response body contains the "status" field and its value is "success"
                   if (responseBody.has("status") && responseBody.get("status").getAsString().equals("success")) {
                       JsonArray array = responseBody.getAsJsonArray("data");
                       Log.e("v", array.toString());
                       menuList.clear();
                       for (JsonElement element : array) {
                           JsonObject jsonObject = element.getAsJsonObject();
                           Food food = new Food();
                           //vegListAdapter = new VegListAdapter(getApplicationContext(), vegList,customer_id);
                           food.setFood_id(jsonObject.get("food_id").getAsInt());
                           food.setFood_name(jsonObject.get("food_name").getAsString());
                           food.setFood_price(jsonObject.get("food_price").getAsInt());
                           food.setImage(jsonObject.get("image").getAsString());
                           menuList.add(food);
                           Log.e("onSuccess", "onSuccess");
                       }
                       menuAdapter.notifyDataSetChanged();
                   } else {
                       // Log an error message indicating that the response status is not "success"
                       Log.e("onResponse", "Response status is not success");
                   }
               } else {
                   // Log an error message indicating that the response is not successful or the body is null
                   Log.e("onResponse", "Response is not successful or body is null");
               }
           }

           @Override
                    public void onFailure(Call<JsonObject> call, Throwable t) {
                        Log.e("onFailure","onFailure");
                        Toast.makeText(MenuActivity.this, "Something went wrong while fetching all food Details", Toast.LENGTH_SHORT).show();
                    }
                });


    }
}