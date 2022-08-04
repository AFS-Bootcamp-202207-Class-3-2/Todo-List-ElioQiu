import React, {useEffect} from 'react'
import { Image } from 'antd';
import ImgSrc from '../../assets/404.jpg'
import './index.css'
import {useNavigate} from "react-router-dom";

export default function NotFoundPage() {
    const navigate = useNavigate()
    useEffect(() => {
        let timer = setTimeout(() =>{
            navigate('/')
        }, 5000)
        return () => {
            clearTimeout(timer);
        };

    }, [])

    return (
        <div className="MyPage">
            <Image src={ImgSrc} />
            <br/><br/><br/>
            <span><b>该路径不存在或资源已被删除，5s后自动跳转回首页。。。。。。</b></span>
        </div>
    )
}