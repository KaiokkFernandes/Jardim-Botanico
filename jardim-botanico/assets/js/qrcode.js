const QrCode  = require('qrcode');  

const generateQrCode = async (text) => {
    try{
       const qrCodeDataUrl = await QrCode.toDataURL(text);
       return qrCodeDataUrl;
    }catch(error){
      console.error('Error generating QR code:', error);
      return null;
    }
};

export const displayQrCode = async (text, elementId) => {
    const qrCOdeDataUrl = await generateQrCode(text);
    if(qrCOdeDataUrl){
        const imgElement = document.createElement('img');
        imgElement.src = qrCOdeDataUrl;
        imgElement.alt = 'QR Code';
        document.getElementById(elementId).appendChild(imgElement);
    }
};