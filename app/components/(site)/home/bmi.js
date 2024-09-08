"use client";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { Form, InputNumber, Select } from "antd";

const BMI = () => {
  const isNumber = (rule, value, callback) => {
    if (isNaN(value)) {
      callback(i18n.t("Please enter a valid number."));
    } else {
      callback();
    }
  };
  return (
    <div className="mb-[120px]">
      <div className="container flex lg:flex-row flex-col lg:gap-0 gap-[110px]">
        <div className="lg:basis-1/2 basis-full">
          <div className="lg:w-fit w-full h-fit px-[24px] pb-[24px] border border-[#D9D9D9]">
            <h4 className="header-4-bold  text-textcolor py-[40px]">
              BMI Chart
            </h4>
            <table className="border border-[#D9D9D9] overflow-auto w-full">
              <thead>
                <tr className="flex border-b border-[#D9D9D9]">
                  <td className="h-[76px] text-textcolor table-text-bold w-1/2 lg:w-[176px] border-r border-[#D9D9D9] flex justify-center items-center">
                    BMI
                  </td>
                  <td className="h-[76px] text-textcolor table-text-bold w-1/2  lg:w-[312px] flex justify-center items-center capitalize">
                    weight status
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr className="flex border-b border-[#D9D9D9] w-full">
                  <td className="h-[76px] text-textcolor table-text w-1/2 lg:w-[176px]  border-r border-[#D9D9D9] flex justify-center items-center">
                    below 18.5
                  </td>
                  <td className="h-[76px] text-textcolor table-text2-normal w-1/2 lg:w-[312px]  flex justify-center items-center capitalize">
                    underweight
                  </td>
                </tr>
                <tr className="flex border-b border-[#D9D9D9]">
                  <td className="h-[76px] text-textcolor table-text w-1/2 lg:w-[176px]  border-r border-[#D9D9D9] flex justify-center items-center">
                    18.5 - 24.9
                  </td>
                  <td className="h-[76px] text-textcolor table-text2-normal w-1/2 lg:w-[312px]  flex justify-center items-center capitalize">
                    healthy
                  </td>
                </tr>
                <tr className="flex border-b border-[#D9D9D9]">
                  <td className="h-[76px] text-textcolor table-text w-1/2 lg:w-[176px]  border-r border-[#D9D9D9] flex justify-center items-center">
                    25.0 - 29.9
                  </td>
                  <td className="h-[76px] text-textcolor table-text2-normal w-1/2 lg:w-[312px]  flex justify-center items-center capitalize">
                    overweight
                  </td>
                </tr>
                <tr className="flex ">
                  <td className="h-[76px] text-textcolor table-text w-1/2 lg:w-[176px]  border-r border-[#D9D9D9] flex justify-center items-center">
                    30.0 - above
                  </td>
                  <td className="h-[76px] text-textcolor table-text2-normal w-1/2 lg:w-[312px]  flex justify-center items-center capitalize">
                    obese
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="pt-[40px] font-medium line-height-[24px] font-[Poppins] text-base">
              <span className="text-primary">BMR</span> metabolic rate /
              <span className="text-primary">BMI</span> body mass index
            </p>
          </div>
        </div>
        <div className="lg:basis-1/2 basis-full bmi-calculator">
          <div className="flex gap-[12px] items-center  mb-[24px]">
            <HiOutlineLockClosed className="text-primary text-[24px]" />
            <h5 className="top-title">body mass index</h5>
          </div>
          <h1 className="header-2-bold mb-[40px] text-textcolor ">
            calculate your bMI{" "}
          </h1>
          <p className="mb-[42px] text-secondarytext paragraph-1-normal">
            Use our BMI calculator to quickly assess if you're at a healthy
            weight based on your height and weight. Track your progress and stay
            on the path to better health.
          </p>
          <Form
            layout="vertical"
            onFinish={async (values) => console.log(values)}
          >
            <div className="grid md:grid-cols-2 grid-cols-1 gap-x-[24px]">
              <Form.Item
                name="height"
                rules={[
                  {
                    required: true,
                    message: "Please input weight!",
                  },
                  {
                    validator: isNumber,
                    message: "Please input a valid number!",
                  },
                ]}
              >
                <InputNumber placeholder="Weight / KG *" />
              </Form.Item>
              <Form.Item
                name="height"
                rules={[
                  {
                    required: true,
                    message: "Please input height!",
                  },
                  {
                    validator: isNumber,
                    message: "Please input a valid number!",
                  },
                ]}
              >
                <InputNumber placeholder={"height / CM *"} />
              </Form.Item>
              <Form.Item
                name="age"
                rules={[
                  {
                    required: true,
                    message: "Please input age!",
                  },
                  {
                    validator: isNumber,
                    message: "Please input a valid number!",
                  },
                ]}
              >
                <InputNumber placeholder={"Age *"} />
              </Form.Item>
              <Form.Item
                name="gender"
                rules={[
                  {
                    required: true,
                    message: "Please select gender!",
                  },
                ]}
              >
                <Select placeholder={"Gender"}>
                  <Select.Option value="male">{"Male"}</Select.Option>
                  <Select.Option value="female">{"Female"}</Select.Option>
                  <Select.Option value="other">{"Other"}</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                className="md:col-span-2 col-span-1"
                name="gender"
                rules={[
                  {
                    required: true,
                    message: "Please select gender!",
                  },
                ]}
              >
                <Select placeholder={"Select an Activity factor"}>
                  <Select.Option value="male">{"Male"}</Select.Option>
                  <Select.Option value="female">{"Female"}</Select.Option>
                  <Select.Option value="other">{"Other"}</Select.Option>
                </Select>
              </Form.Item>

              <button className="rounded-[4px] text-white bg-primary px-[32px] py-[16px] cursor-pointer w-fit">
                {"Calculate"}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default BMI;
