import React, { useState } from 'react'
import {Card, CardContent, CardMedia, Typography, Grid, ListItemAvatar, List, ListItemText, ListItem, Link, IconButton, Button, BottomNavigation, Badge, Icon, CardActions, CircularProgress} from '@material-ui/core'
import useStyles from './gypsum_styles'
import {Home, Phone, Cancel} from '@material-ui/icons'
import ProductCategory from '../../Products/product_category'
import TranChim from '../../../assests/tran_chim.png'
import TranTha from '../../../assests/tran-thach-cao-tha-1.jpg'
import ProductVariant from '../../Products/Product/product_variant'
import ProductSummary from '../../Products/product_summary'
import zalo from '../../../assests/zalo.png'
import { Helmet } from 'react-helmet'
const IntroGypsum = (props) => {
    const classes = useStyles()
    const [open, setOpen] = useState(true)
    const handleClose = () => {
        setOpen((prev)=>!prev)
    }
    return(
        <main className={classes.root} >
        
        <Helmet>
            <title>Thi công trần vách thạch cao| Công ty Tân Hải Vân</title>
            <link rel="canonical" href="https://tanhaivanltd.com/thachcao" />
            <meta name="description" content="Công ty TNHH xây lắp và thương mại Tân Hải Vân chuyên cung cấp thạch cao đến các công trình trên cả nước, đồng thời cung cấp các giải pháp toàn diện về trần vách thạch cao đến các hộ gia đình Việt Nam "/>
            <meta name="keywords" content="thạch cao, vĩnh tường, trần thạch cao, vách thạch cao, tân hải vân, thi công, giá rẻ,chất lượng, mẫu mã đẹp, 2021"/>
        </Helmet>
        {open && <Card className={classes.ad}>
             <CardActions className={classes.closeButton}>
             {props.products.length ? <IconButton  size="medium" onClick={handleClose}>
             <Cancel fontSize="large" style={{color:"white"}}/> 
                
            </IconButton> : <IconButton/> 
}
            </CardActions>
            
            <Typography variant="h3" style={{fontFamily:"Fira Sans"}}>Giá sốc mùa dịch</Typography>
            {props.products.length ?  
            <ProductSummary products={props.products} category="Thi công trần" showPrice={true} onHandleAddToCart={props.onHandleAddToCart} onChooseProduct={props.onChooseProduct}/> : <div style={{display: 'flex', justifyContent: 'center'}}><CircularProgress /></div>}
            <ProductSummary products={props.products} category="Thi công vách" showPrice={true} onHandleAddToCart={props.onHandleAddToCart} onChooseProduct={props.onChooseProduct}/>
        </Card>}
        <Button style={{color:"#479cc9"}} className={classes.icon} component={Link} target="_blank" href="https://zalo.me/0904252226"><img src={zalo} /></Button>
        <main className={classes.main} style={open ? {filter:"brightness(30%)"} : {filter:"brightness(100%)"}}>
        <Card className={classes.content}>
            <CardContent>
                <Typography variant="h2">
                    Trần vách thạch cao đẹp uy tín đa dạng tới mọi khách hàng 
                </Typography>
                <br/>
                <Typography>
                Trong thiết kế xây dựng hiện đại, có một vật liệu ngày càng được ưa chuộng và ứng dụng rộng rãi từ các tòa nhà chung cư lớn đến nhà riêng đó chính là thạch cao. Không phải ngẫu nhiên thạch cao trở nên phổ biến như vậy, nó sở hữu những tính năng ưu việt nhờ được nghiên cứu cải thiện bởi những chuyên gia vật liệu đầu ngành và sản xuất bởi những dây chuyền tối tân tại các nhà máy tiêu chuẩn. Một vài tính chất hiện đại có thể nói đến khả năng chống ẩm, chống cháy tốt, hay cách âm hiệu quả. Ngoài ra, sự đa dạng về mẫu mã cũng khiến cho trần thạch cao ngày càng được lòng khách hàng.
Tuy nhiên vẫn có rất nhiều người chưa thực sự hiểu về trần thạch cao và vẫn muốn cân nhắc sử dụng thạch cao cho ngôi nha của mình thì đây chính là bài viết Tân Hải Vân dành cho quý vị. 
                </Typography>
                <Typography style={{fontWeight:"bold"}}>
                Đồng thời Tân Hải Vân cũng sẽ giới thiệu về các gói thi công trần vách thạch cao hoàn thiện của công ty chúng tôi.
                </Typography>
                <Typography style={{color:'#ed9f51'}}>
                    Với tư cách là một trong những trung tâm phân phối lớn nhất của Vĩnh Tường tại miền bắc và có gần 20 năm hoạt động trong lĩnh vực trần, chúng tôi có đội ngũ thợ thi công kinh nghiệm cùng nguồn hàng cạnh tranh với khả năng hoàn thành những công trình với quy chuẩn khắt khe nhất trên một mức chi phí phù hợp. 
                </Typography>
                <Typography>
                Đối với khách hàng là các đại lý, chúng tôi có hệ thống kho bãi lớn luôn đảm bảo có một nguồn hàng dồi dào. Chúng tôi cũng luôn áp dụng tối đa các chương trình của Vĩnh Tường đến khách hàng nhằm đảm bảo có hàng với giá chiết khấu tới các đại lý.Tân Hải Vân cũng đã đầu tư một đội xe tải ổn định giúp đơn hàng sẽ được vận chuyển không chút chậm trễ. 
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
                    Khung xương: Giúp cố định hệ trần. Nó là kết cấu chính đem đến tính vững chắc cho hệ trần thạch cao.
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Home/>
                        </ListItemAvatar>
                        <ListItemText>
                        Tấm trần thạch cao: là bộ phận kết nối trực tiếp với khung xương thông qua vít chuyên dụng. Đây sẽ là lớp trần mà chúng ta sẽ thấy khi công trình được hoàn thiện.                     
                      </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Home/>
                        </ListItemAvatar>
                        <ListItemText>
                        Sơn bả (Áp dụng với trần chìm): tạo độ mịn & đều màu cho mặt trần, là bước hoàn thiện sau khi phần thô đã được hoàn thành
                        </ListItemText>
                    </ListItem>
                </List>
                <Typography gutterBottom>
                Tấm trần nhựa hay trần nhựa giả gỗ xuất hiện từ lâu đã trở nên quen thuộc với chúng ta, song giờ đây không còn được ưa dùng trần nhà làm từ thạch cao được ưa chuộng hơn rất nhiều bởi có vô vàn ưu điểm siêu việt được các gia đình ưa thích. Cụ thể như sau:
                </Typography>
                <Typography>
                - Thạch cao có trọng lượng nhẹ hơn khoảng 10 lần so với tường gạch truyền thống.
                </Typography>
                <Typography>
                - Thạch cao có khả năng linh động cao, vô cùng dễ dàng dễ tháo lắp. Vậy nên hệ thống trần vách thạch cao được lắp đặt nhanh gọn mà không ảnh hưởng tới cấy trúc trần ngôi nhà cũng như hệ thống dầm chung của cả tòa nhà. 
                </Typography>
                {/* <Typography>
                - Trần có độ an toàn cao nhờ khung xương trần vững chắc. Không chứa các chất độc hại trong quá trình sử dụng hoặc phát ra khí độc.
                </Typography> */}
                <Typography>
                - Về khả năng chống cháy, thạch cao được xem là một nguyên liệu tuyệt vời nhờ vào lớp lõi đã được điều chỉnh khiến nó có tác dụng làm chậm lại quá trình truyền nhiệt và sự lan truyền của lửa, có thể lên tới 150 phút, một thứ tối quan trọng khi không may xảy ra hỏa hoạn. Ngoài ra, tính năng cách nhiệt của tấm thạch cao còn đóng vai trò chống nóng và giảm lượng điện năng tiêu thụ của điều hòa vào mùa hè.   
                </Typography>
                {/* <Typography>
                   - Thạch cao cũng có tính tiêu âm, với tác dụng cản trở sự lan truyền của âm thanh nên cũng được áp dụng rộng rãi trong các không gian sinh hoạt cần sự riêng tư như chung cư, văn phòng,...
                </Typography> */}
                <Typography>
                    - Ngoài ra, tấm Siêu Bảo Vệ mới xuất hiện còn giúp thanh lọc không khí trong phòng bằng cách hấp thu các khí có hại và chuyển hóa thành khí trơ. Quá trình xảy ra liên tục có vòng đời lên đến 50 năm.  
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
                Trần chìm là hệ thống trần thạch cao có cấu tạo khung xương được ẩn giấu toàn bộ bên trên các tấm thạch cao, bạn sẽ không thể nhìn thấy dấu vết nào cả khi trần đã hoàn thiện, nói cách khác nó sẽ giống như một lớp trần bê tông bình thường. Trần chìm được thiết kế bao gồm khung xương và các tấm thạch cao, khung được định hình bằng các thanh thép hình chữ U được bắt vít gắn kết với nhau, sau đó người ta sẽ ghép từng tấm thạch cao vào với nhau (như hình dưới đây).
                </Typography>
            </CardContent>
            <CardMedia image={TranChim} className={classes.media} title={"trần thạch cao chìm"} alt="cấu tạo trần chìm"/>
            <CardContent>
                <Typography style={{justifyContent:'center', fontWeight:'bold'}}>
                    Ưu điểm:
                </Typography>
                <Typography>
                    - Trần thạch cao chìm có tính thẩm mỹ và linh hoạt cao khi chúng ta có thể dễ dàng trang trí hoa văn, họa tiết theo sở thích.
                </Typography>
                <Typography>
                    - Cũng nhờ tính linh hoạt trần chìm có thể kết hợp với nhiều loại đèn trang trí khác nhau mang đến vẻ đẹp sang trọng, tinh tế cho mỗi căn phòng.
                </Typography>
                <Typography>
                    - Trần chìm dễ dàng ứng dụng trong nhiều thiết kế nội thất đa dạng cho dù diện tích lớn hay nhỏ thì mẫu trần này cũng rất thích hợp.
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
        <ProductCategory products={props.products} category="Tấm trần chìm" showPrice={false} onHandleAddToCart={props.onHandleAddToCart} onChooseProduct={props.onChooseProduct}/>
        <Card>
            <CardContent>
                <Typography>
                    Về trần nổi, hay còn gọi là trần thạch cao thả, là loại trần có thiết kế với tấm trang trí và một phần khung xương bị lộ ra ngoài. Nó có thể che đi các khuyết điểm của công trình ở phía trên như: đường dây điện, ống nước…đặt ở dưới trần bê tông hoặc dưới mái tôn, mái ngói. Trần thạch cao nổi thường được sử dụng trong việc thi công trần thạch cao phòng bếp, phòng tắm,... do chúng có thể thay thế vô cùng dễ dàng.
                </Typography>
                <Typography style={{fontWeight:'bold'}}>
                    Ngoài ra chúng còn có một vài ưu điểm nữa các bạn có thể tham khảo:
                </Typography>
                <Typography>
                    - Trần thả được lắp đặt vô cùng nhanh gọn, chúng có thể được lắp ngay trong khi công trình trong quá trình sử dụng.
                </Typography>
                <Typography>
                    - Trần thạch cao thả có thể giúp bạn tiết kiệm tối đa chi phí lắp đặt cũng như sửa chữa.
                </Typography>
                <Typography>
                    - Đây cũng là lựa chọn giúp gia chủ dễ dàng kiểm tra, bảo dưỡng hệ thống điện, không khí phía trên trần.
                </Typography>
            </CardContent>
            <CardMedia image={TranTha} className={classes.media} title={"trần thạch cao thả"} alt="trần thạch cao thả"/>
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
                 <Typography style={{color:"red"}}>
                     Dưới đây là giá thi công trần thạch cao của chúng tôi.  
                 </Typography>
                 <Typography color='textSecondary'>
                     Lưu ý: Giá được tính trên đơn vị là m2 và chưa bao gồm sơn bả đối với trần chìm
                 </Typography>
            </CardContent>
        </Card>
        <ProductCategory products={props.products} category="Thi công trần" showPrice={true} onHandleAddToCart={props.onHandleAddToCart} onChooseProduct={props.onChooseProduct}/>      
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
        <ProductCategory products={props.products} category="Thi công vách" showPrice={true} onHandleAddToCart={props.onHandleAddToCart} onChooseProduct={props.onChooseProduct}/> 
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
        </main>
    )
}

export default IntroGypsum