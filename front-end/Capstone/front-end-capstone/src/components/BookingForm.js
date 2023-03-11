import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";


const BookingForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "17:00",
      guests: 1,
      occasion: "Birthday",
    },
    onSubmit: async (values) => {
      setIsLoading(true);
      await new Promise((r) => setTimeout(r, 1000));
      setIsLoading(false);
      setIsSubmitted(true);
    },
    validationSchema: Yup.object({
      time: Yup.string().required("Required"),
      date: Yup.string().required("Required"),
      guests: Yup.number().required("Required"),
      occasion: Yup.string().required("Required"),
    }),
  });

  return (
    <div className="formWrapper">
      {isSubmitted && <div className="alert">Your table is reserved! <span className="close" onClick={() => setIsSubmitted(prevState => !prevState)}>×</span></div>}
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="date">Choose date</label>
          <input
            type="date"
            id="date"
            onChange={formik.handleChange}
            value={formik.values.date}
            onBlur={formik.handleBlur}
          />
          {formik.errors.date && formik.touched.date && (
            <p className="error">{formik.errors.date}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="time">Choose time</label>
          <select
            id="time"
            name="time"
            onChange={formik.handleChange}
            value={formik.values.time}
            onBlur={formik.handleBlur}
          >
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
          {formik.errors.time && formik.touched.time && (
            <p className="error">{formik.errors.time}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            name="guests"
            onChange={formik.handleChange}
            value={formik.values.guests}
            onBlur={formik.handleBlur}
          />
          {formik.errors.guests && formik.touched.guests && (
            <p className="error">{formik.errors.guests}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            onChange={formik.handleChange}
            value={formik.values.occasion}
            onBlur={formik.handleBlur}
          >
            <option>Birthday</option>
            <option>Engagement</option>
            <option>Anniversary</option>
          </select>
          {formik.errors.occasion && formik.touched.occasion && (
            <p className="error">{formik.errors.occasion}</p>
          )}
        </div>

        <div className="form-group text-center mt-2">
          <button type="submit" className="btn">
            Make Your reservation
            {isLoading && (
              <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;