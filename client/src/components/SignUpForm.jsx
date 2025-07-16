import React, { useRef } from "react";
import { HiMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import logo_red from "../assets/logo_red.png";
import TextField from "./TextField";
import { IoIosPerson } from "react-icons/io";
import { FaArrowLeft, FaPhoneAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaStreetView } from "react-icons/fa";
import { TiChartArea } from "react-icons/ti";
import { FaCity } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";
import { TbMapPinCode } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { MdMovie } from "react-icons/md";
import { MdInterests } from "react-icons/md";
import ImagePicker from "./ImagePicker";
import { BsPersonBadgeFill } from "react-icons/bs";
import { TbFileDescription } from "react-icons/tb";
import { signUpRoute } from "../api/authApi";
import { useDispatch } from "react-redux";
import { toastActions } from "../store/toast";
import { router } from "../App";

const SignUpForm = ({ setToast }) => {
  const email_ref = useRef();
  const name_ref = useRef();
  const password_ref = useRef();
  const confirmPassword_ref = useRef();
  const work_ref = useRef();
  const phone_ref = useRef();
  const street_ref = useRef();
  const area_ref = useRef();
  const city_ref = useRef();
  const state_ref = useRef();
  const pincode_ref = useRef();
  const github_ref = useRef();
  const linkedin_ref = useRef();
  const instagram_ref = useRef();
  const likes_ref = useRef();
  const movie_ref = useRef();
  const interests_ref = useRef();
  const image_ref = useRef();
  const bio_heading_ref = useRef();
  const bio_desc_ref = useRef();

  const dispatch = useDispatch();

  const validate_form1 = () => {
    const email = email_ref.current?.value;
    const name = name_ref.current?.value;
    const password = password_ref.current?.value;
    const confirmPassword = confirmPassword_ref.current?.value;
    const work = work_ref.current?.value;
    const phone = phone_ref.current?.value;

    if (!email || !name || !password || !confirmPassword || !work || !phone) {
      return "Please fill all the fields.";
    } else if (!email.includes("@")) {
      return "Invalid email address.";
    } else if (password.length < 8) {
      return "Password must be at least 8 characters long.";
    } else if (password !== confirmPassword) {
      return "Passwords do not match.";
    }
    return "";
  };

  const validate_form2 = () => {
    const street = street_ref.current?.value;
    const area = area_ref.current?.value;
    const city = city_ref.current?.value;
    const state = state_ref.current?.value;
    const pincode = pincode_ref.current?.value;

    if (!street || !area || !city || !state || !pincode) {
      return "Please fill all the fields.";
    } else if (pincode.length !== 6) {
      return "Invalid pincode.";
    } else {
      return "";
    }
  };

  const validate_form3 = () => {
    const github = github_ref.current?.value;
    const linkedin = linkedin_ref.current?.value;
    const instagram = instagram_ref.current?.value;
    const likes = likes_ref.current?.value;
    const movie = movie_ref.current?.value;
    const interests = interests_ref.current?.value;

    if (!github || !linkedin || !instagram || !likes || !movie || !interests) {
      return "Please fill all the fields.";
    } else {
      return "";
    }
  };

  const validate_form4 = () => {
    const image = image_ref.current?.files[0];
    const bio_heading = bio_heading_ref.current?.value;
    const bio_desc = bio_desc_ref.current?.value;

    if (!image || !bio_heading || !bio_desc) {
      return "Please fill all the fields.";
    } else {
      return "";
    }
  };

  const Form1Next = () => {
    const error = validate_form1();

    if (error) {
      dispatch(toastActions.setToast({ message: error, type: "error" }));
      return;
    }

    const form1 = document.getElementById("form1");
    const form2 = document.getElementById("form2");

    const heading = document.getElementById("form-heading");

    heading.innerHTML = "Address Details <hr />";

    form1.classList.add("hidden");
    form2.classList.remove("hidden");
  };

  const Form2Prev = () => {
    const form1 = document.getElementById("form1");
    const form2 = document.getElementById("form2");

    const heading = document.getElementById("form-heading");

    heading.innerHTML = "Personal Details <hr />";

    form1.classList.remove("hidden");
    form2.classList.add("hidden");
  };

  const Form2Next = () => {
    const error = validate_form2();

    if (error) {
      dispatch(toastActions.setToast({ message: error, type: "error" }));
      return;
    }

    const form2 = document.getElementById("form2");
    const form3 = document.getElementById("form3");

    const heading = document.getElementById("form-heading");

    heading.innerHTML = "Social Media, Likes & Interests <hr />";

    form2.classList.add("hidden");
    form3.classList.remove("hidden");
  };

  const Form3Prev = () => {
    const form2 = document.getElementById("form2");
    const form3 = document.getElementById("form3");

    form2.classList.remove("hidden");
    form3.classList.add("hidden");

    const heading = document.getElementById("form-heading");

    heading.innerHTML = "Address Details <hr />";
  };

  const Form3Next = () => {
    const error = validate_form3();

    if (error) {
      dispatch(toastActions.setToast({ message: error, type: "error" }));
      return;
    }

    const form3 = document.getElementById("form3");
    const form4 = document.getElementById("form4");
    const heading = document.getElementById("form-heading");

    heading.innerHTML = "Profile Picture and Bio <hr />";

    form3.classList.add("hidden");
    form4.classList.remove("hidden");
  };

  const Form4Prev = () => {
    const form3 = document.getElementById("form3");
    const form4 = document.getElementById("form4");

    form3.classList.remove("hidden");
    form4.classList.add("hidden");

    const heading = document.getElementById("form-heading");

    heading.innerHTML = "Social Media, Likes & Interests <hr />";
  };

  const Form4Next = () => {
    const error = validate_form4();
    if (error) {
      dispatch(toastActions.setToast({ message: error, type: "error" }));
      return;
    }
  };

  const handleSubmmit = async (e) => {
    try {
      e.preventDefault();

      // Validate the last form before submitting
      const error = validate_form4();
      if (error) {
        dispatch(toastActions.setToast({ message: error, type: "error" }));
        return;
      }

      dispatch(
        toastActions.setToast({
          message: "Registering User...",
          type: "info",
        })
      );

      const email = email_ref.current?.value;
      const name = name_ref.current?.value;
      const password = password_ref.current?.value;
      const work = work_ref.current?.value;
      const phone = phone_ref.current?.value;

      const street = street_ref.current?.value;
      const area = area_ref.current?.value;
      const city = city_ref.current?.value;
      const state = state_ref.current?.value;
      const pincode = pincode_ref.current?.value;

      const github = github_ref.current?.value;
      const linkedin = linkedin_ref.current?.value;
      const instagram = instagram_ref.current?.value;
      const likes = likes_ref.current?.value;
      const movie = movie_ref.current?.value;
      const interests = interests_ref.current?.value;

      const image = image_ref.current?.files[0];
      const bioHeading = bio_heading_ref.current?.value;
      const bioDescription = bio_desc_ref.current?.value;

      const formData = new FormData();

      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("work", work);
      formData.append("phone", phone);

      formData.append("street", street);
      formData.append("area", area);
      formData.append("city", city);
      formData.append("state", state);
      formData.append("pincode", pincode);

      formData.append("github", github);
      formData.append("linkedin", linkedin);
      formData.append("instagram", instagram);
      formData.append("likes", likes);
      formData.append("movie", movie);
      formData.append("interests", interests);

      formData.append("image", "image");
      formData.append("bioHeading", bioHeading);
      formData.append("bioDescription", bioDescription);

      formData.append("imageFile", image);

      const result = await signUpRoute(formData);

      if (result.error) {
        dispatch(
          toastActions.setToast({
            message: result.error,
            type: "error",
          })
        );
        return;
      }

      dispatch(
        toastActions.setToast({
          message: "User Successfully Registered. Please Sign In to continue.",
          type: "success",
        })
      );

      router.navigate("/auth?mode=signin");
    } catch (error) {
      dispatch(
        toastActions.setToast({
          message: "Something went wrong",
          type: "error",
        })
      );
    }
  };

  return (
    <div className="bg-white p-8 rounded shadow-lg m-4">
      <div className="flex flex-col gap-2 justify-center">
        <img src={logo_red} alt="Logo" width={200} className="self-center" />

        <h1 className="text-xl font-bold text-center text-gray-500">Sign Up</h1>
        <h1
          className="text-xl font-bold text-center text-red-500 p-2"
          id="form-heading"
        >
          Personal Details <hr />
        </h1>
      </div>
      <form className="mt-4" onSubmit={handleSubmmit}>
        {/* Form 1 */}
        <div className="" id="form1">
          <div className="flex gap-4">
            <TextField
              name="username"
              label="Email"
              placeholder="johndoe@gmail.com"
              ref={email_ref}
              icon={HiMail}
              className="w-1/2"
            />
            <TextField
              name="name"
              label="Name"
              placeholder="John Doe"
              ref={name_ref}
              icon={IoIosPerson}
              className="w-1/2"
            />
          </div>
          <div className="flex gap-4">
            <TextField
              name="password"
              label="Password"
              type="password"
              ref={password_ref}
              placeholder="Strong password"
              icon={RiLockPasswordFill}
              className="w-1/2"
            />
            <TextField
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              ref={confirmPassword_ref}
              placeholder="Strong password"
              icon={RiLockPasswordFill}
              className="w-1/2"
            />
          </div>
          <div className="flex gap-4">
            <TextField
              name="work"
              label="Work"
              placeholder="Student, Software Engineer, etc."
              ref={work_ref}
              icon={IoIosPerson}
              className="w-1/2"
            />
            <TextField
              name="phone"
              label="Phone"
              placeholder="1234567890"
              ref={phone_ref}
              icon={FaPhoneAlt}
              className="w-1/2"
            />
          </div>

          <div className="flex justify-center">
            <Button
              type="button"
              gradientMonochrome="failure"
              className="font-bold w-1/5"
              onClick={Form1Next}
            >
              <div className="flex items-center gap-2">
                Next <FaArrowRight />
              </div>
            </Button>
          </div>
        </div>

        {/* Form 2 */}
        <div className="hidden transition-all duration-300" id="form2">
          <div className="flex gap-4">
            <TextField
              name="street-name"
              label="House/Flat No., Street Name"
              placeholder="Address Line 1"
              ref={street_ref}
              icon={FaStreetView}
              className="w-full"
            />
          </div>
          <div className="flex gap-4">
            <TextField
              name="area"
              label="Area"
              placeholder="Area"
              ref={area_ref}
              icon={TiChartArea}
              className="w-1/2"
            />
            <TextField
              name="city"
              label="City"
              placeholder="City"
              ref={city_ref}
              icon={FaCity}
              className="w-1/2"
            />
          </div>
          <div className="flex gap-4">
            <TextField
              name="state"
              label="State"
              placeholder="State"
              ref={state_ref}
              icon={BiWorld}
              className="w-1/2"
            />
            <TextField
              name="pincode"
              label="Pincode"
              placeholder="123456"
              ref={pincode_ref}
              icon={TbMapPinCode}
              className="w-1/2"
            />
          </div>

          <div className="flex justify-center w-full gap-4">
            <Button
              type="button"
              gradientMonochrome="failure"
              className="font-bold w-1/5"
              onClick={Form2Prev}
            >
              <div className="flex items-center gap-2">
                <FaArrowLeft />
                Prev
              </div>
            </Button>
            <Button
              type="button"
              gradientMonochrome="failure"
              className="font-bold w-1/5"
              onClick={Form2Next}
            >
              <div className="flex items-center gap-2">
                Next <FaArrowRight />
              </div>
            </Button>
          </div>
        </div>

        {/* Form 3 */}
        <div className="hidden transition-all duration-300" id="form3">
          <div className="flex gap-4">
            <TextField
              name="github_profile"
              label="Github Profile ID"
              placeholder="hardy-coder99"
              ref={github_ref}
              icon={FaGithub}
              className="w-1/3"
            />
            <TextField
              name="linkedin_profile"
              label="LinkedIn Profile ID"
              placeholder="hardy-influencer99"
              ref={linkedin_ref}
              icon={FaLinkedin}
              className="w-1/3"
            />
            <TextField
              name="instagram_profile"
              label="Instagram Profile ID"
              placeholder="hardy-fashionista99"
              ref={instagram_ref}
              icon={FaInstagramSquare}
              className="w-1/3"
            />
          </div>
          <div className="flex gap-4">
            <TextField
              name="likes"
              label="Likes"
              placeholder="Coding, Sleeping, etc."
              ref={likes_ref}
              icon={FaCity}
              className="w-1/2"
            />
            <TextField
              name="movie"
              label="Movie"
              placeholder="The Shawshank Redemption"
              ref={movie_ref}
              icon={MdMovie}
              className="w-1/2"
            />
          </div>
          <div className="flex gap-4">
            <TextField
              name="interests"
              label="Interests"
              placeholder="Web Development, Machine Learning, etc."
              ref={interests_ref}
              icon={MdInterests}
              className="w-full"
            />
          </div>

          <div className="flex justify-center w-full gap-4">
            <Button
              type="button"
              gradientMonochrome="failure"
              className="font-bold w-1/5"
              onClick={Form3Prev}
            >
              <div className="flex items-center gap-2">
                <FaArrowLeft />
                Prev
              </div>
            </Button>
            <Button
              type="button"
              gradientMonochrome="failure"
              className="font-bold w-1/5"
              onClick={Form3Next}
            >
              <div className="flex items-center gap-2">
                Next
                <FaArrowRight />
              </div>
            </Button>
          </div>
        </div>

        {/* Form 4 */}
        <div className="hidden transition-all duration-300" id="form4">
          <ImagePicker label="Profile Picture" name="image" ref={image_ref} />

          <div className="flex gap-4">
            <TextField
              name="bio_heading"
              label="Bio Heading"
              placeholder="Heading to be displayed for bio"
              ref={bio_heading_ref}
              icon={BsPersonBadgeFill}
              className="w-full"
            />
          </div>

          <div className="flex gap-4">
            <TextField
              name="bio"
              label="Bio Description"
              placeholder="A short bio about yourself"
              ref={bio_desc_ref}
              icon={TbFileDescription}
              className="w-full"
            />
          </div>

          <div className="flex justify-center w-full gap-4">
            <Button
              type="button"
              gradientMonochrome="failure"
              className="font-bold w-1/5"
              onClick={Form4Prev}
            >
              <div className="flex items-center gap-2">
                <FaArrowLeft />
                Prev
              </div>
            </Button>
            <Button
              type="submit"
              gradientMonochrome="failure"
              className="font-bold w-1/5"
            >
              Submit
            </Button>
          </div>
        </div>

        <p className="flex justify-between p-2">
          Already have an account?
          <span>
            <Link to="/auth?mode=signin" className="text-blue-500">
              Sign In
            </Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
