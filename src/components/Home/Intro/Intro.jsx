import React from 'react'
import { Grid, Card, Typography, CardContent, CardMedia, IconButton } from '@material-ui/core'
import useStyles from './intro_styles'
import { Star } from '@material-ui/icons'
import { Helmet } from 'react-helmet'
const Intro =() =>{
    const classes=useStyles();
    return(
        <main className={classes.main}>
             <Helmet>
                <title>
                   Giới thiệu | Công ty Tân Hải Vân
                </title>
                <meta name="description" content="Về công ty TNHH xây lắp và thương mại Tân Hải Vân"/>
                <meta name="keywords" content="thạch cao, vĩnh tường, trần thạch cao, vách thạch cao, tân hải vân, giới thiệu"/>
            </Helmet>
            <Grid className={classes.marginleft}/>
            <Grid className={classes.root}>
            <div className={classes.space}/>
            <Typography variant='h3' justifyContent='center'>
                Top lý do nên lựa chọn sản phẩm của chúng tôi
            </Typography>
            <div className={classes.space}/>    
            <Card className={classes.media}>
                <IconButton>
                    <Star style={{color: '#FDDC00'}}/>
                </IconButton>
                <CardContent >
                <Typography variant='h6'>
                    Sản phẩm chất lượng quốc tế
                </Typography>
                <Typography>
                Sản phẩm Vĩnh Tường đạt tiêu chuẩn ASTM (Mỹ), BS (Anh) và Vĩnh Tường là nhà sản xuất duy nhất có phòng thí nghiệm kiểm chứng sản phẩm đạt chuẩn ASTM. Nguyên liệu được cung cấp bởi các đối tác hàng đầu thế giới như Blue Scope Steel, Saint-Gobain,…
                </Typography>
                </CardContent>
            </Card>
            <div className={classes.card_space}/> 
            <Card className={classes.media}>
                <IconButton>
                    <Star style={{color: '#FDDC00'}}/>
                </IconButton>
                <CardContent >
                <Typography variant='h6'>
                Dãy sản phẩm và giải pháp đa dạng
                </Typography>
                <Typography>
                Vĩnh tường cung cấp giải pháp toàn diện và sản phẩm đa dạng đáp ứng mọi nhu cầu cho khung trần chìm, khung trần nổi và khung vách ngăn. Sản phẩm thích hợp với tất cả các loại tấm thạch cao, tấm trang trí, tấm chức năng: chống ẩm, chống cháy, tiêu âm, cách âm...., tấm Fiber Cement, tấm Cancium Silicate...
                </Typography>
                </CardContent>
            </Card>
            
            <Card style={{border:'none', boxShadow:'none'}}>
                <CardMedia className={classes.image} image='https://vinhtuong.com/sites/default/files/inline-images/banner.png'>

                </CardMedia>
            </Card>
             
            <Card className={classes.media}>
                <IconButton>
                    <Star style={{color: '#FDDC00'}}/>
                </IconButton>
                <CardContent >
                <Typography variant='h6'>
                Năng lực và Kinh nghiệm đã được chứng minh
                </Typography>
                <Typography>
                Hầu hết các công trình hàng đầu tại Việt nam và khu vực như Kumho Asiana, Keang Nam, Tòa tháp 101 cao nhất Đài Loan, Khách sạn 3000 phòng Venetian (Macao)… đều đã và đang sử dụng sản phẩm & giải pháp của Vĩnh Tường.
                </Typography>
                </CardContent>
            </Card>
            <div className={classes.card_space}/> 
            <Card className={classes.media}>
                <IconButton>
                    <Star style={{color: '#FDDC00'}}/>
                </IconButton>
                <CardContent >
                <Typography variant='h6'>
                Hỗ trợ kỹ thuật và bảo hành chu đáo
                </Typography>
                <Typography>
                Đội ngũ nhân viên dự án, kỹ thuật và bán hàng sẵn sàng tư vấn/hỗ trợ cho khách hàng các giải pháp phù hợp cho từng nhu cầu sử dụng, tiết kiệm chi phí. Sản phẩm của Vĩnh Tường sản xuất được bảo hành tới 10 năm.
                </Typography>
                </CardContent>
            </Card>
            </Grid>
            <Grid className={classes.marginright}/>
            
        </main>
    )
}

export default Intro