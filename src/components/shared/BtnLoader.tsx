import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import PropTypes from 'prop-types';


const BtnLoader = ({ text = 'Cargando...' }) => (
  <Button className='w-full text-white mt-6' disabled>
    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
    {text}
  </Button>
);

BtnLoader.propTypes = {
  text: PropTypes.number.isRequired
}

export default BtnLoader