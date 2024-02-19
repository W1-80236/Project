package com.sunbeam.carnivalrestaurant.adapter;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;
import com.sunbeam.carnivalrestaurant.R;
import com.sunbeam.carnivalrestaurant.api.API;
import com.sunbeam.carnivalrestaurant.entity.Food;

import java.util.List;

public class CartAdapter extends RecyclerView.Adapter<CartAdapter.MyViewHolder> {

    List<Food> cartList;
    Context context;
    //Cart cart;


    public CartAdapter(List<Food> cartList, Context context) {
        this.cartList = cartList;
        this.context = context;

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

    //@Override
//    public void onBindViewHolder(@NonNull ProductAdapter.MyViewHolder holder, int position) {
//          }

    @Override
    public int getItemCount() {
        return cartList.size();
    }

    class MyViewHolder extends RecyclerView.ViewHolder {

        TextView textName, textPrice;
        ImageView imageView;

        Button btnPlus, btnMinus;


        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            textName = itemView.findViewById(R.id.textName);
            textPrice = itemView.findViewById(R.id.textPrice);
            imageView = itemView.findViewById(R.id.imageView);
            btnPlus = itemView.findViewById(R.id.btnPlus);
            btnMinus = itemView.findViewById(R.id.btnMinus);


        }
    }
}

