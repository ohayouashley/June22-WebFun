<input type="text" name="first_name"> 
<!--Creates form to fill in text-->

<input type="number" name="age">
<!--Creates form to fill in numbers-->

<input type="password" name="password">
<!--Creates form to fill in password and hides it-->

<input type="date" name="dob">
<!--Creates form to fill in dates-->

<input type="color" name="text_color">
<!--Creates form to fill in color-->

<input type="radio" name="font" value="bold" id="bold">
<label for="bold"><strong>Bold</strong></label>
<input type="radio" name="font" value="normal" id="normal">
<label for="normal">Normal</label>
<!-- Creates form to select options *circle fill in-->

<input type="checkbox" name="accept" id="accept">
<label for="accept">I agree</label>
<!--Creates form for a checkbox-->

<textarea name="comment" cols="20" rows="3"></textarea>

<!--Creates form to allow clients to fill in textbox-->

<select name="snack">
    <option>Almonds</option>
    <option>Cheese and Crackers</option>
    <option>Pita and Hummus</option>
    <option>Pears</option>
</select>
<!--Creates form to use dropdown list and select option-->

<form action="/process" method="post">
    <div>
        <label>Name: </label>
        <input type="text" name="name" 
        placeholder="Your name..." >
    </div>
    <div>
        <label>Email: </label>
        <input type="text" name="email" 
        placeholder="Your email..." >
    </div>
    <div>
        <input type="checkbox" name="offers" 
        id="offers" checked >
        <label for="offers">I would like 
        to receive email offers!</label>
    </div>
    <input type="submit" value="Sign Up!" >
</form>
<!--Common form. This has fill in for name and email as well as check box and button-->
