import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Detail from './Detail';
import Button from 'react-bootstrap/Button';
import { FiLogIn } from 'react-icons/fi';
const Cetak = React.forwardRef((props, ref) => {
    const componentRef = useRef();
            const handlePrint = useReactToPrint({
                content: () => componentRef.current,
  });
    return (
        <div>
            <Button color='#3282F6' size="lg" active className='rounded-pill' onClick={handlePrint}><FiLogIn/>
            Cetak Data
          </Button>
            <Detail ref={componentRef}/>
      
        </div>

    )

}
)
export default Cetak
