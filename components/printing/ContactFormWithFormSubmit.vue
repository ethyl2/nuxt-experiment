<template>
  <div
    id="order-form"
    class="flex flex-col space-y-4 w-11/12 mx-auto bg-teal-700 p-2 rounded mt-6 md:p-4 md:w-1/2"
  >
    <h2 class="text-white text-xl text-center">Contact Us</h2>
    <form
      class="flex flex-col space-y-4 md:mx-12 md:px-4"
      method="POST"
      :action="formSubmitUrl"
      enctype="multipart/form-data"
    >
      <input
        name="name"
        type="text"
        class="text-black px-1 rounded leading-loose"
        placeholder="your name"
        required
        max="100"
        min="5"
      />
      <input
        name="email"
        type="email"
        class="text-black px-1 rounded leading-loose"
        placeholder="your email"
        required
      />
      <input
        name="phone"
        type="tel"
        class="text-black px-1 rounded leading-loose"
        placeholder="your phone"
        required
      />
      <input
        name="address"
        type="text"
        class="text-black px-1 rounded leading-loose"
        placeholder="your street address"
        required
      />
      <input
        name="second-line"
        type="text"
        class="text-black px-1 rounded leading-loose"
        placeholder="address line 2"
      />
      <div class="flex space-x-2">
        <input
          name="city"
          type="text"
          class="text-black px-1 rounded leading-loose flex-grow"
          placeholder="your city"
          required
        />
        <select name="state" required class="text-black rounded py-1">
          <optgroup label="States">
            <option value="AL">AL</option>
            <option value="AK">AK</option>
            <option value="AR">AR</option>
            <option value="AZ">AZ</option>
            <option value="CA">CA</option>
            <option value="CO">CO</option>
            <option value="CT">CT</option>
            <option value="DC">DC</option>
            <option value="DE">DE</option>
            <option value="FL">FL</option>
            <option value="GA">GA</option>
            <option value="HI">HI</option>
            <option value="IA">IA</option>
            <option value="ID">ID</option>
            <option value="IL">IL</option>
            <option value="IN">IN</option>
            <option value="KS">KS</option>
            <option value="KY">KY</option>
            <option value="LA">LA</option>
            <option value="MA">MA</option>
            <option value="MD">MD</option>
            <option value="ME">ME</option>
            <option value="MI">MI</option>
            <option value="MN">MN</option>
            <option value="MO">MO</option>
            <option value="MS">MS</option>
            <option value="MT">MT</option>
            <option value="NC">NC</option>
            <option value="NE">NE</option>
            <option value="NH">NH</option>
            <option value="NJ">NJ</option>
            <option value="NM">NM</option>
            <option value="NV">NV</option>
            <option value="NY">NY</option>
            <option value="ND">ND</option>
            <option value="OH">OH</option>
            <option value="OK">OK</option>
            <option value="OR">OR</option>
            <option value="PA">PA</option>
            <option value="RI">RI</option>
            <option value="SC">SC</option>
            <option value="SD">SD</option>
            <option value="TN">TN</option>
            <option value="TX">TX</option>
            <option value="UT">UT</option>
            <option value="VT">VT</option>
            <option value="VA">VA</option>
            <option value="WA">WA</option>
            <option value="WI">WI</option>
            <option value="WV">WV</option>
            <option value="WY">WY</option>
          </optgroup>

          <optgroup label="US Outlying Territories">
            <option value="AS">AS</option>
            <option value="GU">GU</option>
            <option value="MP">MP</option>
            <option value="PR">PR</option>
            <option value="UM">UM</option>
            <option value="VI">VI</option>
          </optgroup>

          <optgroup label="US Armed Forces">
            <option value="AA">AA</option>
            <option value="AP">AP</option>
            <option value="AE">AE</option>
          </optgroup>
        </select>

        <input
          name="zipcode"
          type="text"
          class="text-black px-1 rounded leading-loose"
          placeholder="your zipcode"
          required
        />
      </div>
      <textarea
        name="notes"
        class="text-black px-1 rounded leading-loose"
        placeholder="your message - what object are you interested in, etc."
        required
      />
      <label for="attachment"
        >For a custom lithophane, include your image file OR include the link to
        your image:</label
      >
      <input type="file" name="attachment" accept="image/png, image/jpeg" />
      <input
        id="imgSrc"
        type="url"
        name="imgSrc"
        class="text-black px-1 rounded leading-loose"
        placeholder="your image's url"
      />
      <input
        type="hidden"
        name="_subject"
        value="New submission for Thomas Nuffer's 3D Printing Shop!"
      />
      <input
        type="hidden"
        name="_autoresponse"
        value="Thank you for your submission! Thomas will get back to you shortly."
      />
      <input type="hidden" name="_template" value="table" />
      <button
        type="submit"
        class="w-full mx-auto rounded p-1 bg-black text-sm text-white text-center hover:bg-gray-700 md:text-base"
        style="max-width: 160px"
      >
        Send
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactFormWithFormSubmit',
  data() {
    return {
      formSubmitUrl: process.env.formSubmitUrl,
    }
  },
}
</script>
