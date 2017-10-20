const packager=require("electron-packager");
const config=require("./config").building;

/**
 * 构建脚本
 */
function build(){
    packager(config,(err, appPaths)=>{
        if(err){
            console.error(err);
        }else{
            console.log("构建成功");
            console.log(appPaths);
        }
    })
}
build();