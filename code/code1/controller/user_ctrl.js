import db from '../db/index.js'

//使用ES6的按需导出语法，将getAllUser 方法导出去
export async function getAllUser(req, res) {
    try {
        const [roms] = await db.query('select aaa from ev_users')
        res.send({
            status: 0,
            message: '获取用户列表数据成功',
            data: roms
        })
    } catch(err) {
        res.send({
            status: 1,
            message: '获取用户列表数据失败!',
            data: err.message
        })
    }
    
}