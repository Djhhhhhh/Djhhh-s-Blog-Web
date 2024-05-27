<script setup></script>
<template>
  <!-- 分页条 -->
  <el-pagination
    v-model:current-page="pageNum"
    v-model:page-size="pageSize"
    :page-sizes="[3, 5, 10, 15]"
    layout="jumper, total, sizes, prev, pager, next"
    background
    :total="total"
    @size-change="onSizeChange"
    @current-change="onCurrentChange"
    style="position: fixed; bottom: 20px; right: 20px"
  />
</template>
