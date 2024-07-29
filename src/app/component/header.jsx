import React from 'react'

export default function Header() {
  return (
    <div className='flex justify-between items-center'>
        <div>Logo</div>
        <div className='flex'>
            <div className='p-5'>Trang chủ</div>
            <div className='p-5'>Mã giảm giá</div>
            <div className='p-5'>Hướng dẫn</div>
            <div className='p-5'>Tin khuyến mại</div>
        </div>
    </div>
  )
}
