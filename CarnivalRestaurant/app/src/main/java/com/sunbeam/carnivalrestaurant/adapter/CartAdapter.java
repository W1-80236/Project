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
import com.sunbeam.carnivalrestaurant.activity.MainActivity;
import com.sunbeam.carnivalrestaurant.activity.PlaceOrderActivity;
import com.sunbeam.carnivalrestaurant.api.API;
import com.sunbeam.carnivalrestaurant.api.RetrofitClient;
import com.sunbeam.carnivalrestaurant.entity.Cart;
import com.sunbeam.carnivalrestaurant.entity.Food;
import com.sunbeam.carnivalrestaurant.utility.CarnivalConstants;

import java.util.List;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class CartAdapter extends RecyclerView.Adapter<CartAdapter.MyViewHolder> {
    List<Food> cartList;
    Context context;
    int initialTotal;
    Cart cart;
    Button btnTotal, btnProceed;


    public CartAdapter(List<Food> cartList, Context context, Button btnTotal, Button btnProceed) {
        this.cartList = cartList;
        this.context = context;
        this.btnProceed = btnProceed;
        this.btnTotal = btnTotal;

    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(context).inflate(R.layout.cart_list, null);
        return new MyViewHolder(view);

    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        Food food = cartList.get(position);
        holder.textName.setText(food.getFood_name());
        holder.textPrice.setText("₹ " + food.getFood_price());
        Glide.with(context).load(API.BASE_URL + "/food_tb/images/" + food.getImage()).into(holder.imageView);
    }

    @Override
    public int getItemCount() {
        return cartList.size();
    }

    class MyViewHolder extends RecyclerView.ViewHolder {
        TextView textName, textPrice, getTextPrice, textQuantity;
        ImageView imageView;
        Button btnPlus, btnMinus;
        int quantity = 0;
        int quantityTotal = 0;
        int total = 0;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            textName = itemView.findViewById(R.id.textName);
            textPrice = itemView.findViewById(R.id.textPrice);
            textQuantity = itemView.findViewById(R.id.textQuantity);
            imageView = itemView.findViewById(R.id.imageView);
            btnPlus = itemView.findViewById(R.id.btnPlus);
            btnMinus = itemView.findViewById(R.id.btnMinus);
            btnTotal = itemView.findViewById(R.id.btnTotal);
            btnProceed = itemView.findViewById(R.id.btnProceed);
            // Food food = cartList.get(getAdapterPosition());
            btnPlus.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    int position = getAdapterPosition();
                    Log.e("plus::", "initiTotal :::" + initialTotal);
                    quantity++;
                    textQuantity.setText("" + quantity);
                    Food food = cartList.get(getAdapterPosition());
                    // intialTotal = intiTotal + food.getFood_Price();
                    int Total = Integer.parseInt(btnTotal.getText().toString()) + food.getFood_price();
                    btnTotal.setText(Integer.toString(Total));

                    btnTotal.setText(Integer.toString(Total));
                }
            });
            btnMinus.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    int postion = getAdapterPosition();
                    if (postion != RecyclerView.NO_POSITION) {
                        int customer_id = context.getSharedPreferences(CarnivalConstants.SHARED_PREFERENCE_FILE_NAME, Context.MODE_PRIVATE).getInt(CarnivalConstants.CUSTOMER_ID, 0);
                        Food food = cartList.get(getAdapterPosition());
                        int food_id = food.getFood_id();
                        Log.e("1st", initialTotal + "");
                        Log.e("1st", quantity + "");
                        Log.e("id's", customer_id + "  " + food_id);

                        if (quantity > 0) {
                            quantity--;
                            if (quantity > 0) {
                                textQuantity.setText("" + quantity);
                                int Total = Integer.parseInt(btnTotal.getText().toString()) - food.getFood_price(); // Corrected line
                                btnTotal.setText(Integer.toString(Total));
                            }
                        }

                        if (quantity == 0) {
                            RetrofitClient.getInstance().getApi().deleteCartItem(food_id, customer_id).enqueue(new Callback<JsonObject>() {
                                @Override
                                public void onResponse(Call<JsonObject> call, Response<JsonObject> response) {
                                    // if(response.body().get("status").getAsString().equals("success")){
                                    if (response.isSuccessful() && response.body() != null && response.body().has("status") && response.body().get("status").getAsString().equals("success")) {
                                        cartList.remove(food);
                                        int Total = Integer.parseInt(btnTotal.getText().toString()) - food.getFood_price();
                                        btnTotal.setText(Integer.toString(Total));
                                        Toast.makeText(context, "item Removed!", Toast.LENGTH_SHORT).show();
                                        if (cartList.size() == 0) {
                                            context.startActivity(new Intent(context, MainActivity.class));
                                        }
                                        notifyDataSetChanged();
                                    }

                                }


                                @Override
                                public void onFailure(Call<JsonObject> call, Throwable t) {
                                    Toast.makeText(context, "cant Remove item!", Toast.LENGTH_SHORT).show();
                                }
                            });
                        } else {
                            int Total = Integer.parseInt(btnTotal.getText().toString()) - food.getFood_price();
                            btnTotal.setText(Integer.toString(Total));
                        }
                        quantityTotal = quantityTotal - quantity;
                    }

                    btnProceed.setOnClickListener(new View.OnClickListener() {
                        @Override
                        public void onClick(View v) {

                            if (cartList.size() != 0) {
                                int customer_id = context.getSharedPreferences(CarnivalConstants.SHARED_PREFERENCE_FILE_NAME, Context.MODE_PRIVATE).getInt(CarnivalConstants.CUSTOMER_ID, 0);

                                RetrofitClient.getInstance().getApi().placeOrder(customer_id).enqueue(new Callback<JsonObject>() {
                                    @Override
                                    public void onResponse(Call<JsonObject> call, Response<JsonObject> response) {

                                        Log.e("placeOrder", response.body() + "");

                                        if (response.body().get("status").getAsString().equals("success")) {
                                            Log.e("placeOrder", response.body() + "");
                                            Toast.makeText(context, "order placed", Toast.LENGTH_SHORT).show();
                                            Intent intent = new Intent(context, PlaceOrderActivity.class);
                                            context.startActivity(intent);
                                        } else {
                                            Toast.makeText(context, "can't place order!!!!", Toast.LENGTH_SHORT).show();
                                        }
                                    }

                                    @Override
                                    public void onFailure(Call<JsonObject> call, Throwable t) {
                                        Toast.makeText(context, "something went wrong while placing order!!!!", Toast.LENGTH_SHORT).show();
                                    }
                                });

                            } else {
                                Toast.makeText(context, "Cart is empty!!", Toast.LENGTH_SHORT).show();
                            }

                            Toast.makeText(context, "placeorder clicked", Toast.LENGTH_SHORT).show();
                        }
                    });
                }

                public void calculatePrice() {
                    Food food = cartList.get(getAdapterPosition());
                    int total1 = food.getFood_price() * 1;
                    int price = food.getFood_price();
                    total = food.getFood_price() * 1;
                    if (quantityTotal <= 0) {
                        total = 0;
                    } else if (quantityTotal == 1) {
                        total = total1;
                    } else {
                        total = total + (price * 1);
                        Log.e("total", total + "");
                    }
                    btnTotal.setText(total + "");
                }
            });
        }
    }
}

