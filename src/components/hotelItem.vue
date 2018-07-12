<template>
  <div>
    <div class="hotel_item">
      <div>
        <img :src="item.img" class="hotel_item_img" mode="scaleToFill">
      </div>
      <div class="hotel_item_R">
        <p>{{item.name}}
          <span class="hotel_item_R_name">{{item.type}}</span>
        </p>
        <p style="color: #1296db;">{{item.score}}分
          <span>{{item.grade}}</span>
          <span class="hotel_item_R_comment"> {{item.comment}}条点评</span>
        </p>
        <div class="hotel_item_R_Bottom">
          <div>
            <p>距离市中心{{item.distace}}公里</p>
            <div style="display: flex;flex: 1;">
              <div class="item_type">烂漫情侣</div>
              <div class="item_type">烂漫情侣</div>
            </div>
          </div>
          <div style="text-align: right;flex: 1;">
            <p class="hotel_item_R_Bottom_R_T">C-TYPE
              <span style="text-decoration:line-through;">${{item.old_prize}}</span>
            </p>
            <p class="hotel_item_R_Bottom_R_B">OUT PRICE ${{item.new_prize}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'hotelItem',
    props: {
      item: {
        type: Array,
        default() {
          return []
        }  
      }
    }
  }
</script>

<style>
  .hotel_item {
    display: flex;
    flex-direction: row;    
    font-size: 15px;
    border-bottom: 1px solid #ccc;    
    }
    .hotel_item_img {
      width: 125px;
      height: 125px;
    }
    .hotel_item_R {      
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      background: white;      
      padding: 10px 0 10px 10px;     
  }
  .hotel_item_R_name {
    font-size: 13px;
    color: #ccc
  }
  .hotel_item_R_comment {
    font-size: 13px;
    color: #ccc
  }
.hotel_item_R_Bottom {
  display: flex; 
  align-items: flex-end
}
.hotel_item_R_Bottom_distance{
  font-size: 13px;
  color: #ccc
}
.item_type {
        height: 20px;
        width: 50px;
        border: 0.5px solid rgb(171,171,171);
        border-radius: 5px;
        line-height: 20px;
        text-align: center;
        margin-top: 10px;
        margin-right: 10px;
        font-size: 11px;
        color: rgb(0, 126, 226);
      }
    .hotel_item_R_Bottom_R_T {
      font-size: 12px;
      color: #ccc
    }
    .hotel_item_R_Bottom_R_B{
      font-size: 13px;
      color: #1296db
    } 
</style>
