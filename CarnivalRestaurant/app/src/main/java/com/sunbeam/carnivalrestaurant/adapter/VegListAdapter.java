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
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.sunbeam.carnivalrestaurant.R;
import com.sunbeam.carnivalrestaurant.activity.DetailsActivity;
import com.sunbeam.carnivalrestaurant.api.API;
import com.sunbeam.carnivalrestaurant.api.RetrofitClient;
import com.sunbeam.carnivalrestaurant.entity.Cart;
import com.sunbeam.carnivalrestaurant.entity.Customer;
import com.sunbeam.carnivalrestaurant.entity.Food;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class VegListAdapter extends RecyclerView.Adapter<VegListAdapter.MyViewHolder> {

    Context context;
    List<Food> vegList;
    Food food;
   int customer_id;

    public VegListAdapter(Context context, List<Food>vegList,int customer_id) {
        this.context = context;
        this.vegList = vegList;
        this.customer_id=customer_id;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(context).inflate(R.layout.list_veg,null);
        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        Food food = vegList.get(position);
        holder.textName.setText(food.getFood_name());
        holder.textPrice.setText("₹"+food.getFood_price());

//        holder.textName.setText(vegList.get(position).getFood_name());
//        holder.textPrice.setText(String.valueOf(vegList.get(position).getFood_price()));
//        holder.textQuantity.setText(vegList.get(position).getQuantity()); // Set initial quantity
        Glide.with(context).load(API.BASE_URL + "/food_tb/images/" + food.getImage()).into(holder.imageView);
        // Increment quantity when '+' button is clicked
//        holder.buttonIncrement.setOnClickListener(v -> {
//            int quantity = Integer.parseInt(holder.textQuantity.getText().toString());
//            quantity++;
//            holder.textQuantity.setText(String.valueOf(quantity));
//            food.setQuantity(quantity);
//        });

        // Decrement quantity when '-' button is clicked
//        holder.buttonDecrement.setOnClickListener(v -> {
//            int quantity = Integer.parseInt(holder.textQuantity.getText().toString());
//            if (quantity > 0) {
//                quantity--;
//                holder.textQuantity.setText(String.valueOf(quantity));
//                food.setQuantity(quantity);
//            }
//        });
    }

    @Override
    public int getItemCount() {
        return vegList.size();
    }

    public class MyViewHolder extends RecyclerView.ViewHolder {
        TextView textName, textPrice, textQuantity;
        ImageView imageView;
//        Button buttonIncrement, buttonDecrement;
         Button addCartBtn;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            textName = itemView.findViewById(R.id.textName);
            textPrice = itemView.findViewById(R.id.textPrice);
            textQuantity = itemView.findViewById(R.id.textQuantity);
            imageView = itemView.findViewById(R.id.imageView);
            addCartBtn = itemView.findViewById(R.id.addCartBtn);
//            buttonIncrement = itemView.findViewById(R.id.buttonIncrement);
//            buttonDecrement = itemView.findViewById(R.id.buttonDecrement);

            itemView.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    Food food= vegList.get(getAdapterPosition());

                    Intent intent = new Intent(context, DetailsActivity.class);
                    intent.putExtra("food", food);
                    context.startActivity(intent);
                }
            });


            //add Product to cart
            addCartBtn.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    Cart cart = new Cart();
                    Food food = vegList.get(getAdapterPosition());
                   Log.e("VegListAdapter", "" + customer_id);

                    int total = food.getQuantity() * food.getFood_price();
                    Log.e("VegListAdapter", "" + food.getFood_id() + "  " + food.getQuantity() + "  " + food.getFood_price() + "  " + total);
                    cart.setCustomer_id(customer_id);
                    cart.setFood_id(food.getFood_id());
                    cart.setQuantity(0);
                    cart.setFood_price(food.getFood_price());
                    cart.setTotal(total);

                    RetrofitClient.getInstance().getApi().addCart(cart).enqueue(new Callback<JsonObject>() {
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

//       public void addCartCall(Food food) {
//            int customer_id =
//            RetrofitClient.getInstance().getApi().addCart().enqueue(new Callback<JsonObject>() {
//                @Override
//                public void onResponse(Call<JsonObject> call, Response<JsonObject> response) {
//
//                }
//
//                @Override
//                public void onFailure(Call<JsonObject> call, Throwable t) {
//
//                }
//            });

//       }
            });
        }
    }
}
