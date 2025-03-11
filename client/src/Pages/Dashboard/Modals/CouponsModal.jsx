import {Box, Modal, Typography} from "@mui/material"
import { useMutation } from "@tanstack/react-query";
import PropTypes from "prop-types";
import { IoCloseOutline } from "react-icons/io5";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "#344B8F",
  boxShadow: 24,
  pt: 2,
  px: 10,
  pb: 3
};
const CouponsModal = ({ open, setOpen, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (couponsInfo) => {
      const { data } = await axiosSecure.post("/addAllCoupons", couponsInfo);
      return data;
    },
    onSuccess: () => {
      toast.success("The Coupon Successfully Added")
      setOpen(false)
      refetch()
    },
    onError: (err)=>{
        toast.error(err.message)
    }
  });
  const handelAddACoupon = async (e) => {
    e.preventDefault();
    const form = e.target;
    const code = form.code.value;
    const discount_percentage = form.percentage.value;
    const description = form.description.value;
    const couponInfo = {
      code,
      discount_percentage,
      description,
      status: "active",
    };
    await mutateAsync(couponInfo);
  };
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className=""
    >
      <Box sx={style} className="relative">
        <Typography
          className="text-center font-bold"
          id="modal-modal-title"
          variant="h6"
          component="h2"
        >
          Add A Coupon
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <form onSubmit={handelAddACoupon} className="space-y-3">
            <div>
              <label className="font-bold" htmlFor="code">
                Coupon Code:
              </label>{" "}
              <br />
              <input
                className="w-full px-3 py-2 bg-white border-none"
                type="text"
                name="code"
                id=""
                placeholder="Please write a coupon code"
              />
            </div>
            <div>
              <label className="font-bold" htmlFor="percentage">
                Discount Percentage:
              </label>{" "}
              <br />
              <input
                className="w-full px-3 py-2 bg-white border-none"
                type="number"
                name="percentage"
                id=""
                placeholder="Please enter the discount percentage"
              />
            </div>
            <div>
              <label className="font-bold" htmlFor="description">
                Description
              </label>{" "}
              <br />
              <textarea
                className="w-full h-[100px] px-3 py-2 bg-white border-none"
                name="description"
                id=""
                placeholder="Please write a description about your discount"
              ></textarea>
            </div>
            <div>
              <button className="btn w-full font-bold" type="submit">
                {isPending ? <div className="animate-spin"><AiOutlineLoading3Quarters></AiOutlineLoading3Quarters></div> : "Add Coupon"}
              </button>
            </div>
          </form>
        </Typography>
        <button
          onClick={() => setOpen(false)}
          className=" absolute p-1 -top-6 -right-5 rounded-full text-white text-3xl font-bold border cursor-pointer"
        >
          <IoCloseOutline></IoCloseOutline>
        </button>
      </Box>
    </Modal>
  );
};

CouponsModal.propTypes = {
  open : PropTypes.func,
  setOpen: PropTypes.func,
  refetch: PropTypes.func
};

export default CouponsModal;