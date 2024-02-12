package com.sunbeam.carnivalrestaurant.adapter;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.sunbeam.carnivalrestaurant.R;
import com.sunbeam.carnivalrestaurant.entity.Food;

import java.util.List;

public class NonVegListAdapter extends RecyclerView.Adapter<NonVegListAdapter.MyViewHolder> {

    Context context;
    List<Food> nonVegList;

    public NonVegListAdapter(Context context, List<Food> nonVegList) {
        this.context = context;
        this.nonVegList = nonVegList;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(context).inflate(R.layout.list_nonveg, null);
        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {

        holder.textName.setText(nonVegList.get(position).getFood_name());
        holder.textPrice.setText(nonVegList.get(position).getFood_price());
    }

    @Override
    public int getItemCount() {
        return nonVegList.size();
    }

    public class MyViewHolder extends RecyclerView.ViewHolder{
        TextView textName, textPrice, textQuantity;
        ImageView imageView;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            textName = itemView.findViewById(R.id.textName);
            textPrice = itemView.findViewById(R.id.textPrice);
            //  textQuantity = itemView.findViewById(R.id.textQuantity);
            // imageView = itemView.findViewById(R.id.imageView);

        }
    }
}