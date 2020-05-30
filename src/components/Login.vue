<template>
    <div id="login">
        <el-form ref="form" :model="loginForm" :rules="rules" label-width="100px">
            <el-row :gutter="24">
                <el-col :span="8" :offset="8">
                    <el-form-item label="用户名" prop="account">
                        <el-input
                                v-model="loginForm.account"
                                name="account"
                                type="text"
                                placeholder="请输入用户名"
                        ></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="24">
                <el-col :span="8" :offset="8">
                    <el-form-item label="密码" prop="password">
                        <el-input
                                v-model="loginForm.password"
                                name="password"
                                type="password"
                                placeholder="请输入密码"
                        ></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="24">
                <el-col :span="8" :offset="8">
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit" :loading="loading"
                        >登录
                        </el-button
                        >
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                loading: false,
                loginForm: {
                    account: "",
                    password: ""
                },
                rules: {
                    account: [{required: true, message: "请输入用户名", trigger: "blur"}],
                    password: [{required: true, message: "请输入密码", trigger: "blur"}]
                }
            };
        },
        methods: {
            onSubmit() {
                let _this = this;
                _this.loading = true;
                _this.$refs["form"].validate(valid => {
                    _this.loading = false;
                    if (valid) {
                        let param = {
                            url: "/api/login/check",
                            params: {
                                account: _this.loginForm.account,
                                password: _this.loginForm.password
                            }
                        };
                        _this.$store.dispatch("login", param).then(() => {
                            _this.$message({
                                type: "success",
                                message: "校验成功",
                                duration: 3000
                            });
                        });
                    } else {
                        _this.$message({
                            type: "error",
                            message: "请完善登录信息",
                            duration: 3000
                        });
                    }
                });
            }
        }
    };
</script>

<style scoped>
    .el-input {
        width: 300px;
    }

    #login {
        text-align: center;
        margin-top: 8%;
    }
</style>
