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
        <p style="color: rgb(0, 126, 226);">{{item.score}}分
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
    font-size: 17px;
    border-bottom: 1px solid #ccc;    
    }
    .hotel_item_img {
      width: 128px;
      height: 118px;
    }
    .hotel_item_R {      
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      background: white;      
      padding: 10px 0 10px 10px;     
  }
  .hotel_item_R_name {
    font-size: 14px;
    color: rgb(163, 163, 163)
  }
  .hotel_item_R_comment {
    font-size: 13px;
    color: rgb(163, 163, 163)
  }
.hotel_item_R_Bottom {
  display: flex; 
  align-items: flex-end;
  font-size: 13px;
  color: rgb(163, 163, 163)
}
.hotel_item_R_Bottom_distance{
  font-size: 13px;
  color: #ccc
}
.item_type {
        height: 16px;
        width: 54px;
        border: 0.5px solid rgb(171,171,171);
        border-radius: 4px;
        line-height: 16px;
        text-align: center;
        margin-top: 10px;
        margin-right: 10px;
        font-size: 10px;
        color: rgb(0, 126, 226);
      }
    .hotel_item_R_Bottom_R_T {
      font-size: 10px;
      color: rgb(178, 178, 178)
    }
    .hotel_item_R_Bottom_R_B{
      margin-top: 3px;
      font-weight: 600;
      font-size: 12px;
      color: rgb(0, 126, 226)
    } 
</style>
