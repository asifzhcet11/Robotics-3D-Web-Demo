#!/usr/bin/env python

from __future__ import print_function

from planning_services.srv import MoveTo, MoveToResponse
import rospy
import sys
import moveit_commander
import moveit_msgs.msg
import geometry_msgs.msg

class MoveToServer:
    def __init__(self, group_name='panda_arm'):
        self.service = rospy.Service('move_to', MoveTo, self.handle_move_to)
        self.robot = moveit_commander.RobotCommander()
        self.scene = moveit_commander.PlanningSceneInterface()
        self.move_group = moveit_commander.MoveGroupCommander(group_name)


    def handle_move_to(self, req):
        rospy.loginfo(req)
        self.move_group.set_pose_target(req.message)
        plan = self.move_group.go(wait=True)
        response = 1 if plan else 0
        return MoveToResponse(response)


if __name__ == "__main__":
    moveit_commander.roscpp_initialize(sys.argv)
    rospy.init_node('move_to_server', anonymous=True)
    move_to_server = MoveToServer()
    rospy.loginfo('Ready to take request')
    rospy.spin()