import React from 'react';
import QRCode from 'qrcode.react';


const QrCodeGenerator = ({ value }) => {
     return (
        <div>
            <QRCode value={value} size={256} />
        </div>
     );
 };

 export default QrCodeGenerator;