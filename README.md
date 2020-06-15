# Bill Tracker
This is a short project to help me understand React.js much better.<br>
This project will allow us to know what days bills are paid on, and affect our set monthly balances.<br>
For every bill, that amount is taken away from the holder on that date.<br>
<br>
<hr>
<b>This is NOT built with create-react-app</b>
<hr>

# To Run
<ul>
    <li>
        npm install
    </li>
    <li>
        npm start
    </li>
</ul>

<br>

# New Implementation
<ul>
    <li>
        <b>Better use of OOP</b>
    </li>
    <li>
        <b>Using more "getter" methods</b>
    </li>
</ul>

<br>

# Data Changes
<ul>
    <li>
        My "Database" is created using an array of objects called "Bills"
    </li>
    <li>
        Each Bill has a: Title, Date, Cost, and Payment type
    </li>
    <li>
        Each bill is unique to a method
    </li>
</ul>

<br>

# Excel without Excel
<ul>
    <li>
        This project is going off the basis of Excel and how it works. Rather than cells we are using components.
    </li>
    <li>
        Each "Sheet" is a component, We will re-render this "Sheet" with new data and or its "props".
    </li>
    <li>
        We will change state when:
        <ul>
            <li>Changing Data</li>
            <li>Updating Data</li>
        </ul>
    </li>
</ul>

<br>

We are keeping track of dates real time, this means after each month ends, we dont need to update the sheet dates, they will update automatically with time.


