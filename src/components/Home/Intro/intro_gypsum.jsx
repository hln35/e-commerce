import React, { useState } from 'react'
import {Card, CardContent, CardMedia, Typography, Grid, ListItemAvatar, List, ListItemText, ListItem, Link, Icon, Button, BottomNavigation} from '@material-ui/core'
import useStyles from './gypsum_styles'
import {Home, Phone} from '@material-ui/icons'
import ProductCategory from '../../Products/product_category'
import TranChim from '../../../assests/tran_chim.png'
import TranTha from '../../../assests/tran-thach-cao-tha-1.jpg'
import ProductVariant from '../../Products/Product/product_variant'
import zalo from '../../../assests/zalo.png'
import { Helmet } from 'react-helmet'
const IntroGypsum = (props) => {
    const classes = useStyles()
    
    return(
        <main className={classes.main}>
        <Helmet>
            <title>Thi công trần vách thạch cao| Công ty Tân Hải Vân</title>
            <meta name="description" content="Công ty TNHH xây lắp và thương mại Tân Hải Vân chuyên cung cấp vật tư giá đến các công trình trên cả nước, đồng thời cung cấp các giải pháp toàn diện về trần vách thạch cao đến các hộ gia đình Việt Nam "/>
            <meta name="keywords" content="thạch cao, vĩnh tường, trần thạch cao, vách thạch cao, tân hải vân, thi công, giá rẻ, 2021"/>
        </Helmet>
        <Button className={classes.icon} style={{color:"#479cc9"}} component={Link} target="_blank" href="https://zalo.me/0904252226"><img src={zalo}/></Button>
        <Card className={classes.content}>
            <CardContent>
                <Typography variant="h2">
                    Trần vách thạch cao đẹp uy tín tới mọi khách hàng 
                </Typography>
                <br/>
                <Typography>
                Trong thiết kế xây dựng hiện đại. Thạch cao ngày càng được ưa chuộng và ứng dụng rộng rãi ví dụ như vách hay trần thạch cao bởi những tính năng ưu việt như nhẹ và có khả năng chống ẩm, chống cháy tốt, cách âm hiệu quả. Ngoài ra, sự đa dạng về mẫu mã cũng khiến cho trần thạch cao ngày càng được lòng khách hàng.
Tuy nhiên vẫn có rất nhiều người chưa thực sự hiểu về trần thạch cao cũng như nghe đến các thương hiệu thạch cao nổi tiếng trên thế giới nhưng vẫn muốn cân nhắc sử dụng thạch cao cho ngôi nha của mình thì đây chính là bài viết Tân Hải Vân dành cho quý vị. 
                </Typography>
                <Typography style={{fontWeight:"bold"}}>
                Đồng thời Tân Hải Vân cũng sẽ giới thiệu về các gói thi công trần vách thạch cao hoàn thiện của công ty chúng tôi.
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
                <br/>
                <Typography style={{fontWeight:'bold'}}>
                    Hiện nay phổ biến 2 loại trần là trần chìm và trần thả.
                </Typography>
                <Typography>
                Trần chìm là một loại trần thạch cao có cấu tạo khung xương được ẩn giấu toàn bộ bên trên các tấm thạch cao, bạn sẽ không thể nhìn thấy các khung xương này, nhìn giống như trần bê tông bình thường. Trần chìm được thiết kế bao gồm khung xương và các tấm thạch cao, trong đó khung xương có tác dụng để treo các tấm thạch cao. Khung định hình bằng nhôm kẽm chữ U được bắt vít gắn kết với nhau, sau đó người ta ghép từng tấm thạch cao vào với nhau.
                </Typography>
            </CardContent>
            <CardMedia image={TranChim} className={classes.media} title={"trần thạch cao chìm"} alt="cấu tạo trần chìm"/>
            <CardContent>
                <Typography style={{justifyContent:'center', fontWeight:'bold'}}>
                    Ưu điểm:
                </Typography>
                <Typography>
                    - Trần thạch cao chìm có ưu điểm về tính thẩm mỹ cao khi dễ dàng trang trí hoa văn, họa tiết theo sở thích.
                </Typography>
                <Typography>
                    - Có thể cắt ghép kết hợp với nhiều loại đèn trang trí khác nhau mang đến vẻ đẹp sang trọng, tinh tế cho mỗi căn phòng.
                </Typography>
                <Typography>
                    - Trần chìm dễ dàng ứng dụng trong nhiều thiết kế nội thất biệt thự, nhà phố, văn phòng…. khác nhau dù diện tích lớn hay nhỏ thì mẫu trần này cũng rất thích hợp.
                </Typography>
                <Typography>
                    - Trọng lượng nhẹ, an toàn cho người sử dụng.
                </Typography>
                <br/>
                <Typography component={Link} href='/'>
                    Các bạn có thể tham khảo các sản phẩm của chúng tôi (tại đây)
                </Typography>
            </CardContent>
        </Card>
        <ProductCategory products={props.products} category="Tấm trần chìm" showPrice={false}/>
        <Card>
            <CardContent>
                <Typography>
                    Về trần nổi, hay còn gọi là trần thạch cao thả, là loại trần có thiết kế với tấm trang trí và một phần khung xương bị lộ ra ngoài. Nó có thể che đi các khuyết điểm của công trình như: đường dây điện, ống nước…đặt ở dưới trần bê tông hoặc dưới mái tôn, mái ngói. Trần thạch cao nổi thường được sử dụng trong việc thi công trần thạch cao phòng bếp, phòng tắm,... do chúng có thể thay thế vô cùng dễ dàng.
                </Typography>
                <Typography style={{fontWeight:'bold'}}>
                    Ngoài ra chúng còn có một vài ưu điểm nữa các bạn có thể tham khảo:
                </Typography>
                <Typography>
                    - Trần thả được lắp đặt vô cùng nhanh gọn, chúng có thể được lắp ngay trong khi công trình trong quá trình sử dụng
                </Typography>
                <Typography>
                    - Trần thạch cao thả có thể giúp bạn tiết kiệm tối đa chi phí lắp đặt cũng như sửa chữa.
                </Typography>
                <Typography>
                    - Đây cũng là lựa chọn giúp gia chủ dễ dàng kiểm tra, bảo dưỡng hệ thống điện, không khí phía trên trần.
                </Typography>
            </CardContent>
            <CardMedia image={TranTha} className={classes.media} title={"trần thạch cao thả"} alt="trần thả"/>
            <CardContent>
                <Typography color='primary' component={Link} href="/">
                Dưới đây là họa tiết các mẫu tấm ánh kim mà Tân Hải Vân đang phân phối. 

                </Typography>
            </CardContent>
        </Card>
        <br/>
        <ProductVariant products={props.products} id="prod_ZRjywMOaVz57Y8"/>
        <Card>
            <CardContent>
                <Typography style={{fontWeight:'bold'}}>
                    Công ty TNHH Xây lắp và Thương mại Tân Hải Vân với gần 20 năm kinh nghiệm gắn bó với ngành trần và đang là một trong những trung tâm phân phối lớn nhất miền bắc cam kết sẽ cung cấp cho công trình của bạn nguồn vật tư chất lượng với giá thành vô cùng ưu đãi.
                 </Typography>
                 <Typography>
                     Dưới đây là giá thi công trần thạch cao của chúng tôi.  
                 </Typography>
                 <Typography color='textSecondary'>
                     Lưu ý: Giá được tính trên đơn vị là m2 và chưa bao gồm sơn bả đối với trần chìm
                 </Typography>
            </CardContent>
        </Card>
        <ProductCategory products={props.products} category="Thi công trần" showPrice={true}/>      
        <Card>
            <CardContent>
                <Typography style={{fontWeight:"bolder"}}>
                    Ngoài các giải pháp về trần, Tân Hải Vân còn chuyên phân phối và thi công các công trình vách ngăn.
                </Typography>
                <Typography>
                    Có thể nói tường hay vách ngăn làm từ thạch cao là một sự lựa chọn vô cùng tối ưu hiện nay được rất nhiều gia chủ ưa chuộng. Ngoài khả năng ngăn chia không gian một cách linh hoạt, chúng còn có những tính năng vô cùng ưu việt ví dụ như chịu ẩm, cách âm hay chống cháy. Có thể nói một hệ tường thạch cao tiêu chuẩn sẽ có thể đem đến cho gia đình bạn một không gian thoải mái và riêng tư nhất.
                </Typography>
                <br/>
                <Typography>
                    Hiện nay chúng tôi đang cung cấp các giải pháp tường thạch cao sau đây:
                </Typography>
            
            </CardContent>
        </Card>
        <ProductCategory products={props.products} category="Thi công vách" showPrice={true}/> 
        <Card>
            <CardContent>
                <Typography>
                    Có thể nói các mức giá được nêu trên của chúng tôi được đánh giá là vô cùng ưu đãi trong thời kì dịch bệnh hiện nay và là giá chính xác trong năm 2021. Để có được dịch vụ với giá tốt nhất đến gia chủ, Tân Hải Vân đã có các giải pháp cắt giảm chi phí tối ưu nhất ví dụ như công ty đã đồng hành với Vĩnh Tường trong suốt một thập kỉ với tư cách là một trong những nhà phân phối lớn nhất cả nước. Ngoài ra Tân Hải Vân cũng sản xuất các sản phẩm khung xương, tấm trần thả PVC mang thương hiệu của chúng tôi có thể giúp cắt giảm chi phí vật tư đầu vào theo yêu cầu của gia chủ.  
                </Typography>
                <br/>
                    <Typography>Chắc hẳn với bài viết trên bạn đã nắm được những kiến thức chung về dịch vụ thi công trần và vách thạch cao tại Tân Hải Vân.</Typography>
            </CardContent>
        </Card>
        <Card style={{
            background: "rgb(219,127,237)",
            background: "linear-gradient(90deg, rgba(219,127,237,1) 0%, rgba(117,117,235,1) 35%, rgba(0,212,255,1) 100%)",
            borderRadius:"0"}}
            className={classes.banner}>
            
                <CardContent  component={Link} href="/contact">
                    <Typography variant="h6" style={{fontWeight:"bold", color:"#913d00"}} >Để được tư vấn chi tiết, cụ thể hơn nữa, bạn có thể liên hệ với chúng tôi (tại đây).</Typography>
                </CardContent>
                
        </Card> 
        <br/>
        </main>
    )
}

export default IntroGypsum