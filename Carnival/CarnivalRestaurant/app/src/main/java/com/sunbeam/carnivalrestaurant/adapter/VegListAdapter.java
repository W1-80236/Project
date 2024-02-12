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

public class VegListAdapter extends RecyclerView.Adapter<VegListAdapter.MyViewHolder> {

    Context context;
    List<Food> vegList;

    public VegListAdapter(Context context, List<Food> VegList) {
        this.context = context;
        this.vegList = VegList;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(context).inflate(R.layout.list_veg, null);
        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {

        holder.textName.setText(vegList.get(position).getFood_name());
        holder.textPrice.setText(vegList.get(position).getFood_price());
    }

    @Override
    public int getItemCount() {

        return vegList.size();
    }

    public class MyViewHolder extends RecyclerView.ViewHolder{
        TextView textName, textPrice, textQuantity;
        ImageView imageView;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            textName = itemView.findViewById(R.id.textName);
            textPrice = itemView.findViewById(R.id.textPrice);
             textQuantity = itemView.findViewById(R.id.textQuantity);
            imageView = itemView.findViewById(R.id.imageView);

        }
    }
}