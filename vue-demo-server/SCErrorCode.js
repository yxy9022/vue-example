/**
 * Created by jerry on 2016/10/12.
 */
var SCErrorCode = {
    BUSY: {err_code: -1, err_msg: '系统繁忙'},//系统繁忙
    OK: {err_code: 0, err_msg: '请求成功'},//请求成功
    INVALID_SECRET: {err_code: 2, err_msg: 'Secret错误'},//Secret错误
    INVALID_APPID: {err_code: 3, err_msg: '无效的APPID'},//无效的APPID
    INVALID_TOKEN: {err_code: 4, err_msg: '不合法的凭证'},//不合法的凭证类型
    INVALID_PARA: {err_code: 5, err_msg: '不合法的参数'},//不合法的参数
    INVALID_SIGNATURE: {err_code: 6, err_msg: '不合法的签名'},//不合法的签名
    EXPIRED_TOKEN: {err_code: 7, err_msg: '过期TOKEN'},//过期TOKEN
    INVALID_OPENID: {err_code: 8, err_msg: '无效的用户OpenID'},//无效的用户OpenID
    INVALID_DEVICE: {err_code: 9, err_msg: '无效设备'},//无效设备，该账号已在另一台设备登录
    BINDING_ERROR: {err_code: 10, err_msg: '账户绑定失败'},//账户绑定失败,该账户已被绑定
    PARAM_NOT_FOUND: {err_code: 11, err_msg: '参数未找到'},

    EXPIRED_COOKIE: {err_code: 20, err_msg: 'cookie过期'},
    EXCEPTION_COOKIE: {err_code: 21, err_msg: 'cookie异常'},

    WEIXIN_AUTH_FAIL: {err_code: 22, err_msg: '微信授权失败'},

    NOT_FOUND: {err_code: 404, err_msg: '未找到'},//未找到此方法
    NO_PERMISSION: {err_code: 503, err_msg: '没有权限'},//没有权限
    SERVER_ERROR: {err_code: 500, err_msg: '访问异常'}//服务端异常

};

module.exports = SCErrorCode;