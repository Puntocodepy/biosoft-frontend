import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

type Props = {
  isPending: boolean;
  submitText: string;
  loadingText: string;
};


const ButtonLoader = ({ isPending, submitText, loadingText }: Props) => (
  <Button className='w-full text-white mt-6' disabled={isPending}>
    {isPending ? (
      <>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        {loadingText}
      </>
    ) : (
      submitText
    )}
  </Button>
);

export default ButtonLoader