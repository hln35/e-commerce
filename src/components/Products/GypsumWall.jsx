import React from 'react'
import { Box, Typography, Card, CardContent, CardMedia, Link, CardActions, IconButton } from '@material-ui/core'
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
            </CardContent>
             <ProductCategory products={props.products} category="Thi công vách" onHandleAddToCart={props.onHandleAddToCart} onChooseProduct={props.onChooseProduct} showPrice={true}/>   
            </Card>
        </main>
    )

}
export default Vach