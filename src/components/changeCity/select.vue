  <template>
  <div class="choose-wrap" @click.stop="showWrap" v-document-click="hideWrap">
    <div class="choose">
      <span>{{value}}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{'mt-content':true, 'active':showList}" v-show="showActive">
        <h2>{{title}}</h2>
        <div class="wrapper">
          <div class="col" v-for="(item, index) in renderList" :key="index"> 
            <span v-for="(ele, i) in item" 
                  :key="i" 
                  :class="{'mt-item':true, 'active': ele==value || ele.name==value}" 
                  @click.stop="changeValue(ele)">
                  {{ele | getName}} 
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showActive: true,  // 控制下拉列表是否显示
    }
  },
  props: ['list', 'value', 'title', 'showList'],
  computed: {
    renderList () {
      let col = Math.ceil(this.list.length / 12);
      let resultList = [];
      for ( var i = 0; i < col; i ++){
        let data = this.list.slice( i*12, i*12 + 12);
        resultList.push(data);
      }
      return resultList;
    }
  },
  methods: {
    showWrap () {
      this.showActive = true;
      this.$emit('change_active', true)     // 触发父级自定义事件来管理下拉列表的显示
    },
    hideWrap () {                          // main里面的自定义指令，给document绑定点击事件
      this.$emit('change_active', false)  // 触发父级自定义事件来管理下拉列表的隐藏
    },
    changeValue (val) {                  // 触发父级自定义事件把选择的省份/城市进行渲染             
      this.$emit('change', val);
      setTimeout( () => {
        this.showActive = false;
      }, 50)
    }
  },
  filters: {
    getName: (val) => {
      return typeof val == 'string' ? val : val.name    
    }
  }
};
</script>

<style lang="scss">
  @import "@/assets/css/changecity/select.scss";
</style>