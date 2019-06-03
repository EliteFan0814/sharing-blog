<template>
  <div id="edit">
    <h1>创建一个想法</h1>
    <h3>标题</h3>
    <el-input v-model="title"></el-input>
    <p class="msg">限20个字</p>
    <h3>简介</h3>
    <el-input type="textarea" v-model="description"  :autosize="{ minRows: 1, maxRows: 3}"></el-input>
    <p class="msg">限40个字</p>
    <h3>想法内容</h3>
    <el-input type="textarea" v-model="content" :autosize="{ minRows: 10, maxRows: 30}"></el-input>
    <!-- <p class="msg">限30个字</p> -->
    <p>
        <label>是否分享此想法</label>
        <el-switch v-model="atIndex" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </p>
    <el-button @click="onCreate">发布想法</el-button>
  </div>
</template>

<script src="./template.js"></script>

<style src="../Edit/template.less" lang="less"></style>
