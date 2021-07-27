import React from 'react'
import {Card, CardContent, CardMedia, Typography, Grid, ListItemAvatar, List, ListItemText, ListItem} from '@material-ui/core'
import useStyles from './gypsum_styles'
import {Home} from '@material-ui/icons'
import { typography } from '@material-ui/system'
const IntroGypsum = () => {
    const classes = useStyles()
    return(
        <main className={classes.main}>
        <Card className={classes.content}>
            <CardContent>
                <Typography variant="h1">
                    Trần thạch cao đẹp 
                </Typography>
                <br/>
                <Typography>
                Trong thiết kế xây dựng hiện đại. Những loại trần thạch cao ngày càng được ưa chuộng và ứng dụng rộng rãi bởi những tính năng ưu việt như nhẹ và có khả năng chống ẩm, chống cháy tốt, cách âm hiệu quả. Ngoài ra, sự đa dạng về mẫu mã cũng khiến cho trần thạch cao ngày càng được lòng khách hàng.
Tuy nhiên vẫn có rất nhiều người chưa thực sự hiểu về trần thạch cao có những kiểu nào. Và các thương hiệu trần thạch cao nổi tiếng cũng như các mẫu thiết kế trần thạch cao cho phòng khách, phòng ngủ hay nhà bếp đẹp.
                </Typography>
                <br/>
                <Typography variant="h6" style={{color:'#b5934c'}}>
                    Định nghĩa về trần thạch cao
                </Typography>
                <Typography>
                Trần thạch cao là trần được làm từ tấm thạch cao, được cố định bằng hệ khung xương vững chắc liên kết vào kết cấu chính của tầng trên. Loại trần này còn được gọi là trần giả, là lớp trần thứ hai nằm dưới trần nhà nguyên thủy.
                </Typography>
                <Typography>
               Chức năng chính của những vật liệu trên cụ thể là:
                </Typography>
                <List>
                    <ListItem>
                        <ListItemAvatar>
                            <Home/>
                        </ListItemAvatar>
                        <ListItemText>
                    Khung xương: Cố định hệ trần theo một khung xương có sẵn. Tối ưu tính vững chắc để lên thạch cao & sơn bả.
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Home/>
                        </ListItemAvatar>
                        <ListItemText>
                        Tấm trần thạch cao: là bộ phận kết nối trực tiếp với khung xương thông qua vít chuyên dụng. Tạo nên độ phẳng cho trần.                      
                      </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Home/>
                        </ListItemAvatar>
                        <ListItemText>
                        Sơn bả (Áp dụng với trần chìm): tạo độ mịn & đều màu cho mặt trần.
                        </ListItemText>
                    </ListItem>
                </List>
                <Typography gutterBottom>
                Có thể các bạn đã tiếp xúc với tấm trần nhựa hay trần nhựa giả gỗ, song trần nhà làm từ thạch cao được ưa chuộng hơn rất nhiều bởi có vô vàn ưu điểm siêu việt được các gia đình ưa thích. Cụ thể như sau:
                </Typography>
                <Typography>
                - Thạch cao có trọng lượng nhẹ hơn khoảng 10 lần so với tường gạch truyền thống.
                </Typography>
                <Typography>
                - Thạch cao có tính năng linh động, dễ tháo lắp. Xây dựng nhanh gọn mà không ảnh hưởng tới cấy trúc trần ngôi nhà cũng như hệ thống dầm chung của cả tòa nhà. Nếu hỏng bạn có thể lắp mới nhanh chóng
                </Typography>
                <Typography>
                - Trần có độ an toàn cao nhờ khung xương trần vững chắc. Không chứa các chất độc hại trong quá trình sử dụng hoặc phát ra khí độc.
                </Typography>
                <Typography>
                - Về khả năng chống cháy, thạch cao được xem là một nguyên liệu tuyệt vời nhờ vào lõi đã được điều chỉnh khiến nó có tác dụng làm chậm lại quá trình truyền nhiệt và sự lan truyền của lửa, có thể lên tới 150 phút, một thứ tối quan trọng khi không may xảy ra hỏa hoạn. Ngoài ra, tính năng cách nhiệt của tấm thạch cao còn đóng vai trò chống nóng và giảm lượng điện năng tiêu thụ của điều hòa vào mùa hè.   
                </Typography>
                <Typography>
                   - Thạch cao cũng có tính tiêu âm, giảm thiểu sự truyền thanh cho âm thanh nên cũng được áp dụng rộng rãi trong các không gian sinh hoạt cần sự riêng tư như chung cư, văn phòng,...
                </Typography>
                <Typography>
                - Tuổi thọ của trần nhà thạch cao cũng tương đồng với độ bền của đồ nội thất nên giúp tiết kiệm được tối đa chi phí bảo dưỡng cũng như đảm bảo an toàn cho những thành viên trong gia đình. 
                </Typography>
                <Typography style={{color:'red'}} variant="h6">
                    Những sản phẩm khung trần và khung vách ngăn Vĩnh Tường và tấm thạch cao Gyproc do Tân Hải Vân phân phối chính hãng đều có bảo hành lên tới 5 năm.
                </Typography>
                <br/>
                <Typography variant="h6" style={{color:'#b5934c'}}> 
                Việc chọn kiểu trần phù hợp cũng vô cùng quan trọng bên cạnh việc chọn nhà phân phối tấm thạch cao và khung xương uy tín. 
                </Typography>
            </CardContent>
        </Card>
        </main>
    )
}

export default IntroGypsum