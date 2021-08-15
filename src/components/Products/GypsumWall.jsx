import React from 'react'
import { Box, Typography, Card, CardContent, CardMedia, Link, CardActions, IconButton,Button } from '@material-ui/core'
import background from '../../assests/backgroundFifa.jpg'
import VachThachCao from '../../assests/anh_vach_thach_cao.jpg'
import Vach1Mat from '../../assests/vach_1_mat.jpg'
import useStyles from './gypsumWall_styles'
import  {Cancel} from '@material-ui/icons'
import { CircularProgress } from '@material-ui/core'
import ProductCategory from './product_category'
import ProductSummary from './product_summary'
import { useState } from 'react'
import { Helmet } from 'react-helmet'
import Gray from '../../assests/black.jpg'
import VachChiuAm from '../../assests/vach_chiu_am.jpg'
import VachChiuLuc from '../../assests/vach_chiu_luc.png'
import DryVsBrick from '../../assests/DrywallvsBrickwall.mp4'
import zIndex from '@material-ui/core/styles/zIndex'
import zalo from '../../assests/zalo.png'

const Vach = (props) => {
    const classes = useStyles()
    const [open, setOpen] = useState(true)
    const handleClose = () => {
        setOpen((prev)=>(!prev))
    }
    return(
        <main className={classes.root}>
            <Helmet>
            <title>Thi công vách ngăn thạch cao| Công ty Tân Hải Vân</title>
            <link rel="canonical" href="https://tanhaivanltd.com/vachthachcao" />
            <meta name="description" content="Công ty TNHH xây lắp và thương mại Tân Hải Vân chuyên cung cấp thạch cao đến các công trình trên cả nước, đồng thời cung cấp các giải pháp toàn diện về trần vách thạch cao đến các hộ gia đình Việt Nam "/>
            <meta name="keywords" content="thạch cao, vĩnh tường, trần thạch cao, vách thạch cao, tân hải vân, thi công, giá rẻ,chất lượng, mẫu mã đẹp, 2021"/>
            </Helmet>
            {open ? <img src={Gray} className={classes.gray}/>: <img 
                    src={background}
                    style={{
                        position:"fixed",
                        zIndex:-1,
                        width:"100%",
                        height:"100%",
                        objectFit:"cover",
                        top:'50%',
                        left:'50%',
                        transform:'translate(-50%,-50%)'
                    }}/> }
                        
            
            {open && <Card className={classes.ad}>
             <CardActions className={classes.closeButton}>
             {props.products.length ? <IconButton  size="medium" onClick={handleClose}>
             <Cancel fontSize="large" style={{color:"white"}}/> 
                
            </IconButton> : <IconButton/> 
}
            </CardActions>
            
            <Typography variant="h3" style={{fontFamily:"Fira Sans"}}>Giá sốc</Typography>
            {props.products.length ?  
            <ProductSummary products={props.products} category="Thi công trần" showPrice={true} onHandleAddToCart={props.onHandleAddToCart} onChooseProduct={props.onChooseProduct}/> : <div style={{display: 'flex', justifyContent: 'center'}}><CircularProgress /></div>}
            <ProductSummary products={props.products} category="Thi công vách" showPrice={true} onHandleAddToCart={props.onHandleAddToCart} onChooseProduct={props.onChooseProduct}/>
        </Card>}
            <Card className={classes.card} >
            <Button className={classes.icon} style={{color:"#479cc9"}} component={Link} target="_blank" href="https://zalo.me/0904252226"><img src={zalo}/></Button>

                <CardContent>
            <Typography  className={classes.text} variant="h3" style={{fontWeight:"bold"}}>
                Vách thạch cao - Trách được sao ?
            </Typography>
            <br/>
            <Typography  className={classes.text} variant="h6">
                Ngày hôm nay, Tân Hải Vân xin gửi đến quý vị một bài viết nữa về mảng nội thất trong nhà từ việc sử dụng các tấm thạch cao. Đó chính là vách ngăn thạch cao, ngoài việc chỉ để ngăn chia không gian với vách ngăn kín, những kiến trúc vách ngăn thạch cao hở cũng có thể là nét trang trí chấm phá tạo điểm nhấn cho căn phòng nhà bạn. 
            </Typography>
            <Typography className={classes.text} variant="h6" component={Link} href="/thachcao">
                Nếu quan tâm về trần thạch cao, bạn có thể xem lại bài viết trước của tôi tại đây
            </Typography>
            
            <br/>
            <br/>
            <Typography className={classes.text} variant="h5" style={{color:"#1a5c55"}}>
               
            Vách thạch cao hay tường thạch cao là gì ?
            
            </Typography>
            <br/>
            <Typography  className={classes.text} variant="h6">
            Vách thạch cao hay còn gọi là tường thạch cao là một kết cấu tương đối nhẹ dùng để ngăn chia không gian sử dụng vật liệu chính là tấm thạch cao hay còn gọi là tấm bê tông nhẹ cùng với hệ thống khung xương làm giá đỡ.
            </Typography>
            </CardContent>
            <CardMedia image={VachThachCao} tittle="Vách thạch cao" alt="Vách thạch cao" className={classes.img}/>
            <br/>
            <CardContent>
                <Typography className={classes.text} variant="h5" style={{color:"#1a5c55"}}>
                Phân loại vách ngăn thạch cao: 
                </Typography>
                <br/>
                <Typography className={classes.text} variant="h6">
                Thông thường tường thạch cao thường được chia làm 2 loại chính phụ thuộc vào cấu trúc của vách đó là vách 1 mặt và vách 2 mặt. 
                </Typography>
                <Typography  className={classes.text} variant="h6">
               <Typography className={classes.text} variant="h6" style={{fontWeight:"bold"}}> Vách 1 mặt </Typography>  là khi chỉ một bên của khung xương có gắn các tấm thạch cao. Thông thường vách thạch cao 1 mặt được sử dụng để ốp tường, giúp che đi các khuyết điểm của lớp tường nguyên thủy ví dụ như mối, ẩm, …. Một ưu điểm khác của tường thạch cao 1 mặt là việc ta có thể dễ dàng chỉnh sửa tường để trang trí có thể bằng việc sử dụng các bộ đèn âm trần.
                </Typography>
                <br/>
            <CardMedia image={Vach1Mat} tittle="Vách thạch cao" alt="Vách thạch cao 1 mặt" className={classes.img}/>
                <br/>
                <Typography  className={classes.text} variant="h6">
               <Typography className={classes.text} variant="h6" style={{fontWeight:"bold"}}> Vách 2 mặt </Typography> là cấu trúc vách ngăn mà thạch cao được gắn với cả 2 bên của khung xương. Đây là sự lựa chọn hoàn hảo để sử dụng cho việc ngăn chia một phòng lớn thành những không gian nhỏ hơn. 
                </Typography>
                <br/>
                <Typography className={classes.text} variant="h5" style={{color:"#1a5c55"}}>
                Báo giá thi công vách thạch cao ưu đãi 2021    
                </Typography>
                <Typography  className={classes.text} variant="h6">
                    Đây là mức giá rất ưu đãi hiện nay do Tân Hải Vân đã cắt giảm chi phí một cách tối đa. Chúng tôi trực tiếp nhập hàng chính hãng của Vĩnh Tường mà không qua bất kì một nhà phân phối phía trên nữa. Đồng thời trực tiếp thi công để vừa đảm bảo chất lượng cũng như hạn chế các hành vi tráo đổi hàng, vừa tối ưu chi phí nhân công. 
                 </Typography>
            </CardContent>
             <ProductCategory products={props.products} category="Thi công vách" onHandleAddToCart={props.onHandleAddToCart} onChooseProduct={props.onChooseProduct} showPrice={true}/>   
            <CardContent>
            <Typography  className={classes.text} variant="h6" component={Link} href="/thachcao">
                Các bạn có thể tham khảo thêm báo giá trần thạch cao(tại đây)
            </Typography>
            <br/>
            <br/>
            <Typography className={classes.text} variant="h5" style={{color:"#1a5c55"}}>
            Hiểu lầm của chúng ta về vách ngăn thạch cao
            </Typography>
            <br/>
            <Typography  className={classes.text} variant="h6">
            -Bạn từng nghe nói rằng vách thạch cao không có khả năng chịu nước? Đó là điều xưa rồi. Giờ đây với việc sử dụng tấm xi măng sợi Duraflex (hay còn gọi là tấm bê tông siêu nhẹ) làm lớp “áo bảo vệ” bên ngoài, bức tường thạch cao nhà bạn hoàn toàn có thể “khỏe mạnh” khi bị bắn nước vào hay ngay cả khi có sự rò rỉ nước.
            </Typography>
            <br/>
            <CardMedia image={VachChiuAm} tittle="Vách thạch cao chịu ẩm" alt="Vách thạch cao chịu" className={classes.img}/>
            <Typography  className={classes.text} variant="h6">
            -Bạn từng thấy đâu đó trên Internet rằng vách thạch cao có khả năng chịu lực kém? Không đâu bạn ơi. Vách thạch cao giờ đây đã có sự cải tiến rất nhiều nhờ các công nghệ kĩ thuật vật liệu hiện đại vừa giúp nâng cấp các ưu điểm vốn có của thạch cao, vừa sửa chữa dần dần các khuyết điểm nhằm mang tới trải nghiệm tuyệt vời cho khách hang. Với tấm thạch cao 12.7mm và tắc kê chuyên dụng, bạn có thể dễ dàng treo chiếc TV nhà mình lên tường thạch cao vì chúng có thể chịu lực tới tối đa 60kg tại mỗi điểm treo.
            </Typography>
            <br/>
            <CardMedia image={VachChiuLuc} tittle="Vách thạch cao chịu lực" alt="Vách thạch cao chịu lực" className={classes.img}/>
            <br/>
            <Typography className={classes.text} variant="h6">
            -Vách ngăn thạch cao thế hệ mới còn có khả năng chịu va đập lớn nhờ sử dụng tấm thạch cao chịu va đập, khiến tường thạch cao trở nên cứng cũng như đàn hồi hơn, giúp gia chủ hạn chế nỗi lo nứt vỡ tường  khi gia đình có trẻ em hiếu động.
            </Typography>
            <br/>
            <Typography className={classes.text} variant="h5" style={{color:"#1a5c55"}}>
            Ưu điểm của vách ngăn thạch cao:
            </Typography>
            <br/>
            <Typography className={classes.text} variant="h6">
            Có vô vàn ưu điểm khiến người người “mê” vách ngăn thạch cao.
            </Typography>
            <Typography className={classes.text} variant="h6">
            + Trong số các loại tường ngăn không gian, vách thạch cao được coi là giải pháp tiết kiệm nhất. Về giá nguyên vật liệu và thi công, thạch cao có giá khá rẻ khi được so sánh với các loại vật liệu khác ví dụ như thi công vách kính cường lực hay tường gạch. 
            </Typography>
            <br/>
            <Typography className={classes.text} variant="h6">
            + Vách ngăn thạch cao cũng có trọng lượng nhẹ làm gảm áp lực lên móng nhà cũng sẽ giúp gia chủ tiết kiệm một khoản đầu tư kha khá. Cụ thể là vách thạch cao có thể nhẹ bằng 1/10 so với tường gạch truyền thống, đó cũng là lí do đôi khi người ta hay gọi thạch cao là tấm bê tông nhẹ. Chính bởi trọng lượng nhẹ nên nó rất được ưa dùng tại những vùng dễ xảy ra động đất do nó có thể đứng vững trước những dao động lớn hơn so với tường truyền thống.
            </Typography>
            <br/>
            <Typography className={classes.text} variant="h6">
            + Tính linh hoạt của các tấm thạch cao cũng sẽ được mang tới các lớp tường thạch cao một cách tối đa. Ngoài việc tạo thành các vách phẳng để chia phòng, dưới bàn tay lành nghề của những người thợ Tân Hải Vân, thạch cao còn có thể được uốn để tạo các cấu trúc khối đầy sáng tạo.
            </Typography>
            <br/>
            
            </CardContent>
            <div style={{display:"flex", justifyContent:"center"}}>
            <Typography className={classes.text} variant="h6" color="textSecondary">
                Video so sánh tốc độ hoàn thiện giữa công trình sử dụng vách thạch cao và tường gạch
            </Typography>
            </div>
            
            <video
            muted
            controls
            className={classes.video}
            title="video so sánh tốc độ hoàn thiện giữa vách ngăn thạch cao và tường gạch"
            alt="video so sánh tốc độ hoàn thiện giữa vách ngăn thạch cao và tường gạch"
             >
                <source src={DryVsBrick} type="video/mp4"/>
            </video>
           
            <CardContent>
            <Typography className={classes.text} variant="h6">
            + Ngoài việc linh hoạt trong tạo khối, vách ngăn thạch cao cũng được dung phổ biến tại các văn phòng. Nhờ việc có thể lắp đặt, điều chỉnh cũng như tháo dỡ dễ dàng, vách ngăn thạch cao chia văn phòng lớn thành những ô nhỏ vừa đem lại sự riêng tư cho nhân viên nhưng cũng đảm bảo tính cộng đồng. 
            </Typography>
            <br/>
            <Typography className={classes.text} variant="h6">
            + Ưu điểm đặc biệt nhất của vách thạch cao đó chính là “có quá nhiều ưu điểm”. Nếu bạn cần cách âm, chống cháy, hay chịu nước, chịu ẩm, đều có các giải pháp vách ngăn thạch cao giúp bạn hài lòng. Với các phòng hát, vách ngăn thạch cao 2 mặt với lớp bông thủy tinh hay cao su non ở giữa sẽ là giải pháp chống ồn hiệu quả nhờ âm thanh có thể được giảm tới 60dB. Còn nếu bạn muốn sử dụng vách ngăn cho phòng bếp hay phòng tắm, những nơi có độ ẩm cao thì cũng đừng ngại sử dụng thạch cao. Vách ngăn thạch cao với tấm thạch cao Gyroc chống ẩm hay tấm bê tông siêu nhẹ Duraflex là những cách đối phó hữu hiệu trong những trường hợp này.
            </Typography>
            <br/>
            <Typography className={classes.text} variant="h6" color="secondary">
                Chắc hẳn qua bài viết trên chúng ta cũng ít nhiều hiểu về vách ngăn thạch cao cũng như mức giá thi công đầy ưu đãi từ Tân Hải Vân. Tôi hy vọng rằng các bạn có thể có những thông tin tốt nhất khi cân nhắc trong việc thiết kế ngôi nhà mơ ước của mình. 
            </Typography>
            </CardContent>
        
            <CardContent  component={Link} href="/contact">
                    <Typography variant="h6" style={{fontWeight:"bold", color:"#913d00"}} >Để được tư vấn chi tiết, cụ thể hơn nữa, bạn có thể liên hệ với chúng tôi (tại đây).</Typography>
            </CardContent>
            <CardMedia>
                <img className={classes.img}></img>
            </CardMedia>
            </Card>
        </main>
    )

}
export default Vach