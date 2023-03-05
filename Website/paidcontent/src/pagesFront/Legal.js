import * as React from 'react';
import BarNav from './BarComponent';
import BottomLinks from './BottomLinks';
import './Legal.css';

export default function Legal() {
    return(
        <div className='legalMain'>
            <div 
                className='attribution'
                style={{
                    height: 1600,
                    width: '100%',
                    position: 'relative',
                    top: 150,
                    fontFamily: 'Helvetica, Arial, sans-serif'

                }}
            >  
                <h2
                    style={{
                        position: 'relative',
                        left: '2.5%',
                        width: '40%',
                        borderBottom: '2px solid black'
                    }}
                >
                    Legal
                </h2>
                <h3
                    style={{
                        position: 'relative',
                        width: '80%',
                        left: '5%',
                        fontWeight: 500
                    }}
                >
                    At Array Assistant, we take our legal responsibilities seriously. We're committed to protecting your privacy and your data, and we comply with all applicable laws and regulations. By using our website and our program, you agree to abide by our Terms of Use and our Privacy Policy.
                    <br/><br/>
                    Our Terms of Use outline the rules and guidelines that govern your use of our website and our program. By using our website and our program, you agree to follow these rules and to use our service only for lawful purposes.
                    <br/><br/>
                    Our Privacy Policy describes how we collect, use, and protect your personal information. We value your privacy and take all necessary measures to keep your data safe and secure.
                    <br/><br/>
                    If you have any questions or concerns about our legal policies or procedures, please don't hesitate to contact us. We're always happy to help and to ensure that our customers are satisfied with our service.
                </h3>
                <h2
                    style={{
                        position: 'relative',
                        top: 50,
                        left: '2.5%',
                        width: '40%',
                        borderBottom: '2px solid black'
                    }}
                >
                    Privacy Policy
                </h2>
                <h3
                    style={{
                        position: 'relative',
                        width: '80%',
                        left: '5%',
                        top: 50,
                        fontWeight: 500
                    }}
                >
                    This Privacy Policy describes how we, Array Assistant, collect and use your personal information when you use our service. By using our service, you agree to the terms of this Privacy Policy.
                    <br/><br/>
                    <span style={{ fontWeight: 700, fontSize: 21, width: '20%', borderBottom: '1px solid black'}}>Information We Collect</span>
                    <br/><br/>
                    When you sign up for our service, we collect your first name, email address, and password. When you purchase a subscription, we collect your card and payment details.
                    <br/><br/>
                    We do not collect billing details, and we do not track any personal information while you are using our service.
                    <br/><br/>
                    The card details you provide are stored with Stripe, a third-party payment processor. We do not have access to this information, and it is not stored on our servers.
                    <br/><br/>
                    Your emails and names are stored with Google's Firebase Authentication and Firestore database platforms. We use this information to authenticate your account and to provide you with access to our service.
                    <br/><br/>
                    We track requests that you make to our service by the account associated with your email. This information is used to improve our service and to provide you with a better user experience.
                    <br/><br/>
                    When you delete your account, we will remove all of your personal information from our servers.
                    <br/><br/>
                    <span style={{ fontWeight: 700, fontSize: 21, width: '20%', borderBottom: '1px solid black'}}>How We Use Your Information</span>
                    <br/><br/>
                    We use your personal information to provide you with access to our service and to improve our service. We may also use your information to communicate with you about our service and to provide you with promotional offers.
                    <br/><br/>
                    We do not share your personal information with third parties, except as necessary to provide you with our service. We may also share your information if required by law or to protect our legal rights.
                    <br/><br/>
                    <span style={{ fontWeight: 700, fontSize: 21, width: '20%', borderBottom: '1px solid black'}}>How We Protect Your Information</span>
                    <br/><br/>
                    We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. We use industry-standard encryption technologies to protect your information during transmission and storage.
                    <br/><br/>
                    However, no method of transmission over the internet or storage of electronic data is 100% secure. Therefore, we cannot guarantee the absolute security of your personal information.
                    <br/><br/>
                    <span style={{ fontWeight: 700, fontSize: 21, width: '20%', borderBottom: '1px solid black'}}>Changes to this Privacy Policy</span>
                    <br/><br/>
                    We reserve the right to update or change this Privacy Policy at any time. If we make any material changes to this policy, we will notify you by email or by posting a notice on our website.
                    <br/><br/>
                    <span style={{ fontWeight: 700, fontSize: 21, width: '20%', borderBottom: '1px solid black'}}>Contact Us</span>
                    <br/><br/>
                    If you have any questions or concerns about this Privacy Policy, please contact us at arrayassistant.ai@gmail.com.
                </h3>
                <h3
                    style={{
                        position: 'relative',
                        width: '90%',
                        left: '2.5%',
                        top: 85
                    }}
                >
                    Attribution:
                </h3>
                <a href="https://www.flaticon.com/free-icons/paper" title="paper icons"
                    style={{
                        position: 'relative',
                        width: '90%',
                        left: '2.5%',
                        top: 75
                    }}
                >
                    Paper icons created by Icongeek26 - Flaticon<br/>
                </a>
                <a href="https://www.flaticon.com/free-icons/cpu" title="cpu icons"
                    style={{
                        position: 'relative',
                        width: '90%',
                        left: '2.5%',
                        top: 75
                    }}
                >
                    Cpu icons created by Icongeek26 - Flaticon
                </a>
            </div>
            <div
                className='infoSection'
                style={{
                    width: '102%',
                    height: 250,
                    position: 'relative',
                    top: 100,
                    left: '-1%',
                    color: 'white',
                    backgroundColor: '#1F1F1F' 
                }}
            >
                <BottomLinks />
            </div>
            <BarNav />
            <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>
        </div>
    )
}