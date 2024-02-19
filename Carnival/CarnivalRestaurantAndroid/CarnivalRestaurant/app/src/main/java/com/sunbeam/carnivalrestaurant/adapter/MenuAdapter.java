package com.sunbeam.carnivalrestaurant.adapter;

import android.content.Context;
import android.content.Intent;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;
import com.google.gson.JsonObject;
import com.sunbeam.carnivalrestaurant.R;
import com.sunbeam.carnivalrestaurant.activity.DetailsActivity;
import com.sunbeam.carnivalrestaurant.api.API;
import com.sunbeam.carnivalrestaurant.api.RetrofitClient;
import com.sunbeam.carnivalrestaurant.entity.Cart;
import com.sunbeam.carnivalrestaurant.entity.Food;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class MenuAdapter extends RecyclerView.Adapter<MenuAdapter.MyViewHolder> {

    Context context;
    List<Food> menuList;
    Food food;
   int customer_id;

    public MenuAdapter(Context context, List<Food>vegList, int customer_id) {
        this.context = context;
        this.menuList = vegList;
        this.customer_id=customer_id;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(context).inflate(R.layout.list_menu,null);
        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        Food food = menuList.get(position);
        holder.textName.setText(food.getFood_name());
        holder.textPrice.setText("₹"+food.getFood_price());

//        holder.textName.setText(vegList.get(position).getFood_name());
//        holder.textPrice.setText(String.valueOf(vegList.get(position).getFood_price()));
//        holder.textQuantity.setText(vegList.get(position).getQuantity()); // Set initial quantity
        Glide.with(context).load(API.BASE_URL + "food_tb/images/" + food.getImage()).into(holder.imageView);

    }

    @Override
    public int getItemCount() {
        return menuList.size();
    }

    public class MyViewHolder extends RecyclerView.ViewHolder {
        TextView textName, textPrice, textQuantity;
        ImageView imageView;

         Button addCartBtn;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            textName = itemView.findViewById(R.id.textName);
            textPrice = itemView.findViewById(R.id.textPrice);
            textQuantity = itemView.findViewById(R.id.textQuantity);
            imageView = itemView.findViewById(R.id.imageView);
            addCartBtn = itemView.findViewById(R.id.addCartBtn);

            itemView.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    Food food= menuList.get(getAdapterPosition());

                    Intent intent = new Intent(context, DetailsActivity.class);
                    intent.putExtra("food", food);
                    context.startActivity(intent);
                }
            });


            //add menu to cart
            addCartBtn.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    Cart cart = new Cart();
                    Food food = menuList.get(getAdapterPosition());
                   Log.e("MenuAdapter", "" + customer_id);

                    int total = food.getQuantity() * food.getFood_price();
                    Log.e("MenuAdapter", "" + food.getFood_id() + "  " + food.getQuantity() + "  " + food.getFood_price() + "  " + total);
                    cart.setCustomer_id(customer_id);
                    cart.setFood_id(food.getFood_id());
                    cart.setQuantity(0);
                    cart.setPrice(food.getFood_price());
                    cart.setTotal(total);

                    RetrofitClient.getInstance().getApi().addCart().enqueue(new Callback<JsonObject>() {
                        @Override
                        public void onResponse(Call<JsonObject> call, Response<JsonObject> response) {
                            if(response.body().get("status").getAsString().equals("success"))
                            {
           //                    JsonArray jsonArray = response.body().getAsJsonArray("data");

                                if(response.body().getAsJsonObject("data").size()!=0)
                                {
                                    Toast.makeText(context, "menuItems added to cart", Toast.LENGTH_SHORT).show();
                                    addCartBtn.setText("Added");
                                }

                            }
                            else {
                                Toast.makeText(context, "menu added !!", Toast.LENGTH_SHORT).show();
                            }
                        }


                        @Override
                        public void onFailure(Call<JsonObject> call, Throwable t) {

                            Toast.makeText(context, "something went wrong while adding cart!", Toast.LENGTH_SHORT).show();
                        }
                    });

                }

            });
        }
    }
}
